import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

type DocHeroProps = {
  title: string;
  subtitle: ReactNode;
};

export default function DocHero({title, subtitle}: DocHeroProps): ReactNode {
  const logoUrl = useBaseUrl('/img/rightview-white.png');

  return (
    <div className="rv-hero">
      <div className="rv-hero__inner">
        <img className="rv-hero__logo" src={logoUrl} alt="Rightview" />
        <h1 className="rv-hero__title">{title}</h1>
        <p className="rv-hero__subtitle">{subtitle}</p>
        <a className="rv-hero__cta" href="https://sites.rightview.ai">
          Open Navigator
        </a>
      </div>
    </div>
  );
}
