import { AVAILABLE_LANGUAGES } from "@/constants";
import { LanguagesEnum } from "@/enums";
import { MenuItem, Menu, HoveredLink } from "@/shared/components";
import { useState } from "react";

export function LanguageSelector() {
  const [active, setActive] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<LanguagesEnum>(LanguagesEnum.ENGLISH);
  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item={currentLanguage}>
        <div className="flex flex-col gap-y-2">
        {
          AVAILABLE_LANGUAGES.map((language) => (
            <HoveredLink key={language.value} onClick={() => setCurrentLanguage(language.value)}>
              <div className="flex items-center gap-x-2">
              <img src={language.flag} alt={language.name} className="w-4 h-4" />
              <span>{language.name}</span>
              </div>
            </HoveredLink>
          ))}
        </div>
      </MenuItem>
      </Menu>
  );
}
