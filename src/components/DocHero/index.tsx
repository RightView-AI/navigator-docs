import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';

type DocHeroProps = {
  title: string;
  subtitle: ReactNode;
  badge?: string;
};

export default function DocHero({title, subtitle, badge = 'User guide'}: DocHeroProps): ReactNode {
  return (
    <div className="rv-hero">
      <div className="rv-hero__inner">
        <span className="rv-hero__badge">{badge}</span>
        <h1 className="rv-hero__title">{title}</h1>
        <p className="rv-hero__subtitle">{subtitle}</p>
        <div className="rv-hero__actions">
          <a className="rv-hero__cta" href="https://sites.rightview.ai">
            Open Navigator
          </a>
          <Link className="rv-hero__cta rv-hero__cta--ghost" to="/getting-started/whats-new">
            See what&apos;s new
          </Link>
        </div>
      </div>
    </div>
  );
}
