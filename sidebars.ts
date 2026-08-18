import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  userGuideSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/sign-in',
        'getting-started/navigation',
        'getting-started/tips-and-tricks',
        'getting-started/whats-new',
      ],
    },
    {
      type: 'category',
      label: 'Chat',
      items: [
        'chat/asking-questions',
        'chat/viewing-citations',
        'chat/viewing-sources',
        'chat/view-flow',
      ],
    },
    {
      type: 'category',
      label: 'Study Collections',
      items: [
        'collections/upload-documents',
        'collections/manage-collections',
        'collections/restrict-access',
      ],
    },
    {
      type: 'category',
      label: 'Visits',
      items: ['visits/overview'],
    },
    {
      type: 'category',
      label: 'Artifacts',
      items: ['artifacts/save-and-share'],
    },
    {
      type: 'category',
      label: 'Inbox & Contacts',
      items: [
        'inbox/send-to-pi',
        'contacts/pi-contacts',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'admin/site-capacity-and-users',
        'admin/site-settings',
      ],
    },
    {
      type: 'category',
      label: 'Account',
      items: ['settings/account', 'settings/multi-factor-authentication'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/roles-and-permissions'],
    },
    'changelog',
    'roadmap',
  ],
};

export default sidebars;
