import { readFileSync } from "node:fs";
import ts from "typescript";

const sources = [
  ["ca-marfa", "ro", "caMarfaQuestions"],
  ["manager-taxi-inchiriere", "ro", "managerTaxiQuestions"],
  ["sofer-taxi", "ro", "soferiTaxiQuestions"],
  ["sofer-taxi", "en", "soferiTaxiEnglishQuestions"],
  ["sofer-inchiriere", "ro", "soferiInchiriereQuestions"],
  ["sofer-inchiriere", "en", "soferiInchiriereEnglishQuestions"],
];

export async function readQuestionBanks() {
  return Promise.all(sources.map(async ([category, language, name]) => {
    const source = readFileSync(new URL(`../src/data/${name}.ts`, import.meta.url), "utf8");
    const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
    const module = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
    const questions = module[name];
    const ids = new Set();
    for (const q of questions) {
      if (!Number.isInteger(q.id) || ids.has(q.id) || !q.text || !q.sourceNo ||
          q.answers.length < 2 || q.answers.length > 4 ||
          new Set(q.answers.map(a => a.key)).size !== q.answers.length ||
          !q.answers.every(a => /^[a-d]$/.test(a.key) && a.text) ||
          !q.answers.some(a => a.key === q.correct)) throw new Error(`Invalid question ${name}/${q.id}`);
      ids.add(q.id);
    }
    return { category, language, questions };
  }));
}
