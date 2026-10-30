export type QuestionKey = "a" | "b" | "c" | "d";
export type QuestionItem = {
  id: number;
  sourceNo: string;
  images?: string[];
  text: string;
  answers: { key: QuestionKey; text: string }[];
  correct: QuestionKey;
};

export function pickRandomQuestions<T>(items: T[], count: number): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(count, arr.length));
}
