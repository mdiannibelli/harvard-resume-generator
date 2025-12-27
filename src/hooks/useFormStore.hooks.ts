import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/form-store";
import {
  updateFormValues,
  resetFormValues,
  addPersonalInfo,
  addEducation,
  addExperience,
  addSkill,
  updateWantIcons,
  addLanguage,
  updateSelectedCvLanguage,
  updateClearFieldsAfterGeneration,
} from "@/store/slices/form-value.slice";
import type { ResumeDataSchema } from "@/models/resume.models";

export function useFormStore() {
  const dispatch = useDispatch<AppDispatch>();
  const formData = useSelector((state: RootState) => state.form);

  return {
    formData,
    selectedCvLanguage: formData.selectedCvLanguage,
    updateFormValues: (data: ResumeDataSchema) =>
      dispatch(updateFormValues(data)),
    updatePersonalInfo: (data: ResumeDataSchema["personalInfo"]) =>
      dispatch(addPersonalInfo(data)),
    updateEducation: (data: ResumeDataSchema["education"]) =>
      dispatch(addEducation(data)),
    updateExperience: (data: ResumeDataSchema["experience"]) =>
      dispatch(addExperience(data)),
    updateSkills: (data: ResumeDataSchema["skills"]) =>
      dispatch(addSkill(data)),
    updateLanguages: (data: ResumeDataSchema["languages"]) =>
      dispatch(addLanguage(data)),
    updateSelectedCvLanguage: (data: ResumeDataSchema["selectedCvLanguage"]) =>
      dispatch(updateSelectedCvLanguage(data)),
    updateWantIcons: (data: ResumeDataSchema["wantIcons"]) =>
      dispatch(updateWantIcons(data)),
    updateClearFieldsAfterGeneration: (
      data: ResumeDataSchema["clearFieldsAfterGeneration"]
    ) => dispatch(updateClearFieldsAfterGeneration(data)),
    resetForm: () => dispatch(resetFormValues()),
  };
}
