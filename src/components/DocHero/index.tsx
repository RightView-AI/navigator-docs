import type {ReactNode} from 'react';

type DocHeroProps = {
  title: string;
  subtitle: ReactNode;
};

export default function DocHero({title, subtitle}: DocHeroProps): ReactNode {
  return (
    <div className="rv-hero">
      <div className="rv-hero__inner">
        <h1 className="rv-hero__title">{title}</h1>
        <p className="rv-hero__subtitle">{subtitle}</p>
        <a className="rv-hero__cta" href="https://sites.rightview.ai">
          Open Navigator
        </a>
      </div>
    </div>
  );
}
