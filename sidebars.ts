import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  userGuideSidebar: [
    'intro',
    'video-library',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/sign-in',
        'getting-started/navigation',
        'getting-started/tips-and-tricks',
      ],
    },
    {
      type: 'category',
      label: 'Chat',
      items: ['chat/asking-questions', 'chat/citations-and-sources'],
    },
    {
      type: 'category',
      label: 'Documents',
      items: ['collections/upload-documents', 'collections/manage-collections'],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'visits/overview',
        'finance/finance-desk',
        'artifacts/save-and-share',
        'inbox/send-to-pi',
        'contacts/pi-contacts',
      ],
    },
    'extension/chrome-extension',
    'extension/passive-capture',
    {
      type: 'category',
      label: 'Admin & Account',
      items: [
        'admin/site-capacity-and-users',
        'admin/site-settings',
        'reference/roles-and-permissions',
        'settings/account',
        'settings/multi-factor-authentication',
      ],
    },
    {type: 'link', label: 'Changelog', href: '/changelog'},
    'roadmap',
    'feature-request',
  ],
};

export default sidebars;
