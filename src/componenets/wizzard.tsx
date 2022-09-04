import {WizardProgressProps, WizardProps, WizardStepProps} from "./types/wizard";
import {createContext, useContext, useEffect, useState} from "react";
const WizardContext = createContext({
    currentStep: 0,
    nextPage: () : void => {},
    prevPage: () : void => {},
    length: 0
});

export function Wizard(props: WizardProps) {
    if (typeof props.children === 'undefined') {
        throw new Error('Wizard must have at least one child');
    }

    const [currentStep, setCurrentStep] = useState(0);

    function nextPage() : void {
        setCurrentStep(currentStep + 1);
    }

    function prevPage() : void {
        setCurrentStep(currentStep - 1);
    }

    return <WizardContext.Provider value={{
        currentStep: currentStep,
        nextPage,
        prevPage,
        length: props.children.length
    }}>
        {props.children[currentStep]}
    </WizardContext.Provider>
}

Wizard.Page = function Page(props: WizardStepProps) {
    const wizardSharedState : any = useContext(WizardContext);

    function renderPrevButton() {
        if (wizardSharedState.currentStep === 0) {
            return null;
        }
        return <button className={'btn btn-primary'} onClick={wizardSharedState.prevPage}>Prev</button>
    }

    function renderNextButton() {
        if (wizardSharedState.currentStep === wizardSharedState.length - 1) {
            return null;
        }
        return <button className={'btn btn-primary'} onClick={wizardSharedState.nextPage} disabled={!props.isPageFilled}>Next</button>
    }

    return <div className={'container'}>
        <div className="row">
            <div className="col">
                {props.children}
                {renderPrevButton()}
                {renderNextButton()}
            </div>
        </div>

    </div>
}

Wizard.Progress = function Progress(props: WizardProgressProps) {
    return <p>{props.currentStep + 1} / {props.length}</p>;
}
