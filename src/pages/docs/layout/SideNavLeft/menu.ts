// types
import { MenuItem } from 'types';

export const MENU_ITEMS: MenuItem[] = [
    {
        key: 'getting-started',
        label: 'Getting Started',
        children: [
            {
                key: 'introduction',
                label: 'Introduction',
                url: '/docs/introduction',
            },
            {
                key: 'quick-start',
                label: 'Create Importer',
                url: '/docs/quick-start',
            },
            {
                key: 'customization',
                label: 'Testing Importer',
                url: '/docs/customization',
            },
            {
                key: 'routing',
                label: 'Linking Database',
                url: '/docs/routing',
            },
            {
                key: 'code-spliting',
                label: 'Embed Importer',
                url: '/docs/code-spliting',
            },
           
        ],
    },
    {
        key: 'style-guide',
        label: 'Further Information',
        children: [
            {
                key: 'colors',
                label: 'Features',
                url: '/docs/colors',
            },
            {
                key: 'change-log',
                label: 'Change Log',
                url: '/docs/change-log',
            },
          
         ],
    },
];