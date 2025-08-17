import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  steps: string[];
  currentStep: number;
  onGoToStep: (step: number) => void;
}

const Header: React.FC<HeaderProps> = ({ steps, currentStep, onGoToStep }) => {
  return (
    // FIXED: Use className instead of style
    <div className={styles.header}>
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        const stepItemClasses = [
          isActive ? styles.active : styles.stepItem,
          isCompleted ? styles.completed : ''
        ].filter(Boolean).join(''); // filter(Boolean) removes empty strings

        return ( 
          <React.Fragment key={step}>
            <div className={styles.stepItemContainer}>
              <div
                className={stepItemClasses}
                onClick={() => isCompleted && onGoToStep(stepNumber)}
              >
                {isCompleted ? '✔' : stepNumber}
              </div>
              <div className={styles.stepLabel}>{step}</div>
            </div>
            {stepNumber < steps.length && <div className={styles.connector}></div>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Header;