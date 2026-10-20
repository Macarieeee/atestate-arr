import type { QuestionItem, QuestionKey } from "./data/managerTaxiQuestions";

export type SavedAnswers = Partial<Record<number, QuestionKey>>;

export const examPassMarks = {
  "manager-taxi-inchiriere": 42,
  "sofer-inchiriere": 14,
  "sofer-taxi": 14,
} as const;

// Answer keys are indexed by position in this exam, not by source question ID.
export function getExamResult(questions: QuestionItem[], answers: SavedAnswers, passMark: number) {
  const review = questions.map((question, index) => ({
    question,
    number: index + 1,
    selected: answers[index + 1],
  }));
  const mistakes = review.filter(({ question, selected }) => selected !== question.correct);
  const correct = questions.length - mistakes.length;
  return { correct, total: questions.length, passed: correct >= passMark, mistakes };
}
