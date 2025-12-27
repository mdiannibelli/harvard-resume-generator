import { StepWrapper } from "@/components";
import { LanguageItem, SkillItem } from "../items";

export function SkillsStep() {
  return (
    <div className="flex flex-col gap-16">
      <StepWrapper>
        <SkillItem />
      </StepWrapper>
      <StepWrapper>
        <LanguageItem />
      </StepWrapper>
    </div>
  );
}
