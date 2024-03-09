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
            }
        ],
    },
    {
        key: 'style-guide',
        label: 'Matthew',
        children: [
            {
                key: 'colors',
                label: 'Chicken nuggets',
                url: '/docs/colors',
            }
        ],
    },
];
