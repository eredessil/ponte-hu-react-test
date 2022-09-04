import {ReactComponentElement} from "react";

export type WizardProps = {
    children: ReactComponentElement<any>[];
}

export type WizardStepProps = {
    children: ReactComponentElement<any>|ReactComponentElement<any>[];
    isPageFilled?: boolean;
}

export type WizardProgressProps = {
    currentStep: number;
    length: number;
}
