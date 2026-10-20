"""Rebuild the two Romanian banks from their annotated PDFs.

Requires PyMuPDF (python -m pip install pymupdf).
Run without arguments to validate; pass --write to update the TypeScript files.
Question shading, answer indentation and highlight annotations are authoritative.
"""

import argparse
import json
from pathlib import Path
import re

import pymupdf


DATA = Path(__file__).resolve().parents[1] / "src" / "data"
SOURCES = [
    ("intrebari soferi inchiriere.pdf", "soferiInchiriereQuestions"),
    ("intrebari manageri taxi.pdf", "managerTaxiQuestions"),
]
# Visually checked unindented answer starts at page boundaries, where
# paragraph spacing cannot distinguish a new answer from a wrapped line.
PAGE_START_ANSWERS = {
    ("intrebari manageri taxi.pdf", 28): "cheltuială marită în contul de rezultat patrimonial.",
    ("intrebari manageri taxi.pdf", 30): "cheltuieli cu salariile;",
}


def normalize(text):
    return " ".join(text.split())


def extract(path):
    questions = []
    current = None
    with pymupdf.open(path) as document:
        for page in document:
            previous_y = None
            backgrounds = [
                drawing["rect"]
                for drawing in page.get_drawings()
                if drawing["fill"]
                and all(abs(component - 0.847) < 0.01 for component in drawing["fill"])
                and drawing["rect"].width > 400
            ]
            highlights = [
                pymupdf.Quad(annotation.vertices[i:i + 4]).rect
                for annotation in page.annots()
                if annotation.type[1] == "Highlight"
                for i in range(0, len(annotation.vertices), 4)
            ]
            lines = [
                line
                for block in page.get_text("dict")["blocks"]
                for line in block.get("lines", [])
            ]
            for line in sorted(lines, key=lambda item: (item["bbox"][1], item["bbox"][0])):
                raw = "".join(span["text"] for span in line["spans"])
                text = normalize(raw)
                box = pymupdf.Rect(line["bbox"])
                if not text or box.y0 < 60 or box.y0 > 790:
                    continue
                if re.fullmatch(r"\d+\.\s*Capitolul\s+[IVX]+", text):
                    continue
                center = (box.tl + box.br) / 2
                is_question = any(center in background for background in backgrounds)
                number = re.match(r"^(\d{3})\.\s*(.*)", text)
                if number and is_question:
                    current = {
                        "id": len(questions) + 1,
                        "sourceNo": number[1],
                        "text": number[2],
                        "answers": [],
                        "_correct": set(),
                        "_page": page.number + 1,
                    }
                    questions.append(current)
                elif is_question:
                    assert current and not current["answers"], (page.number + 1, text)
                    current["text"] += " " + text
                else:
                    assert current, (page.number + 1, text)
                    # Some edited answer paragraphs have lost their indentation.
                    # Their 15pt paragraph spacing still distinguishes them from
                    # wrapped lines (13.32–13.46pt) on the same page.
                    new_paragraph = previous_y is not None and box.y0 - previous_y > 14.5
                    page_start_answer = (
                        previous_y is None
                        and PAGE_START_ANSWERS.get((path.name, page.number + 1)) == text
                    )
                    if raw.startswith("  ") or not current["answers"] or new_paragraph or page_start_answer:
                        current["answers"].append({"key": chr(97 + len(current["answers"])), "text": text})
                    else:
                        current["answers"][-1]["text"] += " " + text
                    if any((box & mark).get_area() > box.get_area() * 0.25 for mark in highlights):
                        current["_correct"].add(current["answers"][-1]["key"])
                previous_y = box.y0
    errors = []
    for question in questions:
        if len(question["answers"]) != 4 or len(question["_correct"]) != 1:
            errors.append(question)
        else:
            question["correct"] = next(iter(question["_correct"]))
    if errors:
        for question in errors:
            print(json.dumps(question, ensure_ascii=False, default=list))
        raise ValueError(f"{path.name}: {len(errors)} ambiguous questions")
    for question in questions:
        del question["_correct"], question["_page"]
    return questions


def render(existing, name, questions):
    prefix, rest = existing.split(f"export const {name}: QuestionItem[] = [", 1)
    _, suffix = rest.split("\n];", 1)
    quote = lambda value: json.dumps(value, ensure_ascii=False)
    rows = []
    for question in questions:
        answers = "\n".join(
            f'      {{ key: {quote(answer["key"])}, text: {quote(answer["text"])} }},'
            for answer in question["answers"]
        )
        rows.append(
            "  {\n"
            f'    id: {question["id"]},\n'
            f'    sourceNo: {quote(question["sourceNo"])},\n'
            f'    text: {quote(question["text"])},\n'
            f"    answers: [\n{answers}\n    ],\n"
            f'    correct: {quote(question["correct"])},\n'
            "  },"
        )
    return prefix + f"export const {name}: QuestionItem[] = [\n" + "\n".join(rows) + "\n];" + suffix


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--write", action="store_true")
    args = parser.parse_args()
    outputs = []
    for pdf, name in SOURCES:
        questions = extract(DATA / pdf)
        target = DATA / f"{name}.ts"
        existing = target.read_text(encoding="utf-8")
        old_numbers = re.findall(r'sourceNo: "(\d+)"', existing)
        assert old_numbers == [question["sourceNo"] for question in questions], "Question order/count changed"
        outputs.append((target, render(existing, name, questions)))
        print(f"{pdf}: {len(questions)} questions, four answers and one highlighted correct answer each.")
    if args.write:
        for target, content in outputs:
            target.write_text(content, encoding="utf-8", newline="\n")
            print(f"Updated {target.name}")
