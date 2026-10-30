"""Extract CA Marfa questions, highlighted answers and illustrations. Run with --write to save."""
import argparse
import json
import re
import pymupdf
from import_romanian_questions import DATA, extract

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--write', action='store_true')
args = parser.parse_args()
# Page 35, question 028 has no highlight (visually checked). Answer c is
# confirmed by Regulation 561/2006, Article 4(g), and question 027 on that page.
# https://eur-lex.europa.eu/eli/reg/2006/561/oj/eng
questions = extract(DATA / 'ca_marfa.pdf', DATA.parents[1] / 'public' / 'ca-marfa', {(35, '028'): 'c'})
assert len(questions) == 355, len(questions)
with pymupdf.open(DATA / 'ca_marfa.pdf') as document:
    source_numbers = [number for page in document for number in re.findall(r'(?m)^(\d{3})\.', page.get_text())]
assert source_numbers == [q['sourceNo'] for q in questions], 'Question count/order differs from PDF'
assert sum(len(q.get('images', [])) for q in questions) == 5
output = 'import type { QuestionItem } from "./managerTaxiQuestions";\n\n'
output += '// Generated from ca_marfa.pdf by scripts/import_ca_marfa.py.\n'
output += 'export const caMarfaQuestions: QuestionItem[] = ' + json.dumps(questions, ensure_ascii=False, indent=2) + ';\n'
if args.write:
    (DATA / 'caMarfaQuestions.ts').write_text(output, encoding='utf-8', newline='\n')
print(f'{len(questions)} questions validated; four answers each; five illustrations.')
