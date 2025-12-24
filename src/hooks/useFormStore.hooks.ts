import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/form-store";
import {
  updateFormValues,
  resetFormValues,
  addPersonalInfo,
  addEducation,
  addExperience,
  addSkill,
} from "@/store/slices/form-value.slice";
import type { ResumeDataSchema } from "@/models/resume.models";

export function useFormStore() {
  const dispatch = useDispatch<AppDispatch>();
  const formData = useSelector((state: RootState) => state.form);

  return {
    formData,
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
    resetForm: () => dispatch(resetFormValues()),
  };
}
