import React, { useState, Children, cloneElement, isValidElement } from 'react';
import Header from './Header';
import styles from './Container.module.css';

interface ParentContainerProps {
  steps: string[];
  children: React.ReactNode[];
}

const ParentContainer: React.FC<ParentContainerProps> = ({ steps, children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = steps.length;

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const handleGoToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  const currentChild = Children.toArray(children)[currentStep - 1];

  return (
    // FIXED: Use className instead of style
    <div className={styles.container}>
      <Header steps={steps} currentStep={currentStep} onGoToStep={handleGoToStep} />
      <div className={styles.content}>
        {isValidElement(currentChild)
          ? cloneElement(currentChild as React.ReactElement<any>, {
              onNext: handleNext,
              onPrev: handlePrev,
              isFirstStep: currentStep === 1,
              isLastStep: currentStep === totalSteps,
            })
          : currentChild}
      </div>
    </div>
  );
};

export default ParentContainer;