import type {ReactNode} from 'react';

type Step = {
  title: string;
  body: ReactNode;
  optional?: boolean;
};

export default function WelcomeSteps({steps}: {steps: Step[]}): ReactNode {
  return (
    <ol className="rv-steps">
      {steps.map((step, i) => (
        <li key={step.title} className="rv-step">
          <span className="rv-step__num" aria-hidden="true">
            {i + 1}
          </span>
          <div className="rv-step__content">
            <h3 className="rv-step__title">
              {step.title}
              {step.optional && <span className="rv-step__tag">Optional</span>}
            </h3>
            <p className="rv-step__body">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
