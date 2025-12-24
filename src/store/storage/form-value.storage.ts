import type { ResumeDataSchema } from "@/models/resume.models";

export const loadStateFromLocalStorage = (): ResumeDataSchema | undefined => {
  try {
    const serializedState = localStorage.getItem("resumeFormData");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as ResumeDataSchema;
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }
};

export const saveStateToLocalStorage = (state: ResumeDataSchema): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("resumeFormData", serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};
