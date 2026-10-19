import { managerTaxiQuestions } from "./managerTaxiQuestions";
import { soferiTaxiQuestions } from "./soferiTaxiQuestions";
import { soferiInchiriereQuestions } from "./soferiInchiriereQuestions";
import { soferiTaxiEnglishQuestions } from "./soferiTaxiEnglishQuestions";
import { soferiInchiriereEnglishQuestions } from "./soferiInchiriereEnglishQuestions";

export function getQuestionBank(atestat: string, language: string | null) {
  if (atestat === "sofer-taxi") {
    return language === "en" ? soferiTaxiEnglishQuestions : soferiTaxiQuestions;
  }
  if (atestat === "sofer-inchiriere") {
    return language === "en" ? soferiInchiriereEnglishQuestions : soferiInchiriereQuestions;
  }
  return managerTaxiQuestions;
}
