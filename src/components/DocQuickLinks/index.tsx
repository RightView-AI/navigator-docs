import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';

type QuickLink = {
  to: string;
  label: string;
  description: string;
};

const LINKS: QuickLink[] = [
  {
    to: '/getting-started/whats-new',
    label: "What's new",
    description: 'Highlights from the latest Navigator release',
  },
  {
    to: '/collections/upload-documents',
    label: 'Upload documents',
    description: 'PDFs, Office files, images, and more',
  },
  {
    to: '/artifacts/save-and-share',
    label: 'Share artifacts',
    description: 'Private, selected colleagues, or whole site',
  },
  {
    to: '/collections/restrict-access',
    label: 'Access control',
    description: 'Limit collections and documents by user',
  },
  {
    to: '/chat/asking-questions',
    label: 'Ask in chat',
    description: 'Follow-ups and study collection scope',
  },
  {
    to: '/getting-started/tips-and-tricks',
    label: 'Tips & tricks',
    description: 'Prompt help, PHI/PII, and upload timing',
  },
];

export default function DocQuickLinks(): ReactNode {
  return (
    <div className="rv-quick-grid">
      {LINKS.map((link) => (
        <Link key={link.to} to={link.to} className="rv-quick-card">
          <span className="rv-quick-card__label">{link.label}</span>
          <p className="rv-quick-card__desc">{link.description}</p>
        </Link>
      ))}
    </div>
  );
}
