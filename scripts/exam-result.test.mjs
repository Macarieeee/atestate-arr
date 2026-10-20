import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

const source = readFileSync(new URL("../src/examResult.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext },
});
const { getExamResult, examPassMarks } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
);

function questions(total) {
  return Array.from({ length: total }, (_, index) => ({
    id: 100 + index,
    sourceNo: "001",
    text: `Question ${index + 1}`,
    correct: "b",
    answers: ["a", "b", "c", "d"].map((key) => ({ key, text: `Answer ${key}` })),
  }));
}

for (const [category, total, threshold] of [
  ["manager-taxi-inchiriere", 60, 42],
  ["sofer-inchiriere", 20, 14],
  ["sofer-taxi", 20, 14],
]) {
  test(`${category}: fails below threshold and passes at threshold`, () => {
    assert.equal(examPassMarks[category], threshold);
    for (const score of [threshold - 1, threshold, total]) {
      const answers = Object.fromEntries(
        Array.from({ length: total }, (_, i) => [i + 1, i < score ? "b" : "a"]),
      );
      const result = getExamResult(questions(total), answers, examPassMarks[category]);
      assert.equal(result.correct, score);
      assert.equal(result.total, total);
      assert.equal(result.passed, score >= threshold);
      assert.equal(result.mistakes.length, total - score);
    }
  });
}

test("review keeps exam order and actual selected answers, including unanswered questions", () => {
  const bank = questions(20);
  const result = getExamResult(bank, { 1: "b", 2: "d", 4: "a" }, 14);
  assert.equal(result.correct, 1);
  assert.equal(result.passed, false);
  assert.equal(result.mistakes.length, 19);
  assert.deepEqual(result.mistakes[0], { question: bank[1], number: 2, selected: "d" });
  assert.deepEqual(result.mistakes[1], { question: bank[2], number: 3, selected: undefined });
  assert.equal(result.mistakes[2].selected, "a");
  assert.equal(result.mistakes[0].question.correct, "b");
});

test("an exam with no saved answers scores zero", () => {
  const result = getExamResult(questions(20), {}, 14);
  assert.equal(result.correct, 0);
  assert.equal(result.total, 20);
  assert.equal(result.passed, false);
  assert.equal(result.mistakes.length, 20);
});
