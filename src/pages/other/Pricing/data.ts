// types
import { PlanItem } from 'components/pricing';
import { Benefit } from '../Career/types';

const plans: PlanItem[] = [
    {
        id: 1,
        name: 'Limited',
        price: '0',
        duration: '/ month',
        features: [
            'Free forever for projects',
            'Max 10 000 rows',
            'Simple auto mapping',
            '£1 per import',
            '5 free imports a month',
        ],
        isRecommended: false,
    },
    {
        id: 2,
        name: 'Access',
        price: '465',
        duration: '/ month',
        features: [
            'Max 50 000 rows',
            'Whitelabel',
            'Fix in app',
            'Technical support',
            'AI Integrated',
        ],
        isRecommended: true,
        isPopular: true,
    },
    {
        id: 3,
        name: 'Unlimited',
        price: '1985',
        duration: '/ month',
        features: [
            'Unlimited rows',
            'Unlimited imports',
            'External hosting possible',
            'Reduced AI costs',
        ],
        isRecommended: false,
    },
];

const benefits: Benefit[] = [
    {
        icon: 'phone-call',
        title: 'Technical Support',
        description: 'Our professional technical support team will help you out at every step',
    },
    {
        icon: 'compass',
        title: 'Technology',
        description: 'A special training to get start with the platform by professionals',
    },
    {
        icon: 'bar-chart-2',
        title: 'Growth Analysis',
        description: 'A dedicated team to get insights around your growth every month',
    },
    {
        icon: 'coffee',
        title: 'Rewards',
        description: 'A special reward for the most performing account every month',
    },
];

export { plans, benefits };
