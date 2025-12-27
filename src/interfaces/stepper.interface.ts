export interface StepperProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
  handleStepClick: (step: number) => void;
}
