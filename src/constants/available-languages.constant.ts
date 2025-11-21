import { LanguagesEnum } from "@/enums";
import type { AvailableLanguagesInterface } from "@/interfaces/available-languages.interface";

export const AVAILABLE_LANGUAGES: AvailableLanguagesInterface[] = [
  {
    value: LanguagesEnum.ENGLISH,
    name: "English",
    flag: "./src/assets/icons/flags/en.svg",
  },
  {
    value: LanguagesEnum.SPANISH,
    name: "Español",
    flag: "./src/assets/icons/flags/es.svg",
  },
];
