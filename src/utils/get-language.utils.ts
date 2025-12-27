import { LanguagesCodeEnum, LanguagesEnum } from "@/enums";

export const getLanguageEnum = (code: string): LanguagesEnum => {
  return code === LanguagesCodeEnum.ENGLISH
    ? LanguagesEnum.ENGLISH
    : LanguagesEnum.SPANISH;
};
