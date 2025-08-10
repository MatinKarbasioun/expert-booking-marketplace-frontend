
import styles from './Header.module.css'


interface HeaderProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
}

// TypeScript: Define the type for a single step object
interface Step {
  number: number;
  name: string;
}

const BackArrow: React.FC = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
  </svg>
);

const NextArrow: React.FC = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
);

const Header: React.FC<HeaderProps> = ({ currentStep, totalSteps, onNext, onBack }) => {
  const steps: Step[] = [
    { number: 1, name: 'User Information' },
    { number: 2, name: 'Reserve a time' },
    { number: 3, name: 'Review & Submit' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.stepsContainer}>
        {steps.map((step: Step) => {
          const isActive = step.number === currentStep;
          const isCompleted = step.number < currentStep;
          let stepClass = styles.step;
          if (isActive) stepClass += ` ${styles.active}`;
          if (isCompleted) stepClass += ` ${styles.completed}`;

          return (
            <div key={step.number} className={stepClass}>
              <div className={styles.stepNumber}>
                {isCompleted ? '✔' : step.number}
              </div>
              <span className={styles.stepName}>{step.name}</span>
            </div>
          );
        })}
      </div>

      <div className={styles.navButtons}>
        <button
          className={styles.button}
          onClick={onBack}
          disabled={currentStep === 1}
        >
          <BackArrow />
          Back
        </button>
        <button
          className={styles.button}
          onClick={onNext}
          disabled={currentStep === totalSteps}
        >
          Next
          <NextArrow />
        </button>
      </div>
    </header>
  );
};

export default Header;