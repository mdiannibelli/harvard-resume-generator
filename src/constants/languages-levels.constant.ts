import { LanguagesLevelEnum } from "@/enums/languages-level.enum";

export const LANGUAGES_LEVEL = [
  {
    value: LanguagesLevelEnum.NATIVE,
    label: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.NATIVE",
  },
  {
    value: LanguagesLevelEnum.B1,
    label: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.B1",
  },
  {
    value: LanguagesLevelEnum.B2,
    label: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.B2",
  },
  {
    value: LanguagesLevelEnum.C1,
    label: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.C1",
  },
  {
    value: LanguagesLevelEnum.C2,
    label: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.C2",
  },
] as const;
