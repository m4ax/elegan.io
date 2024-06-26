// types
import { PlanItem } from 'components/pricing';

import { Feature, Feature3 } from './types';

const features: Feature[] = [
        {
        avatar: 'user-plus',
        title: "You are making customers work too hard.",
        description: "Forcing users to manually adjust their data to match your system's requirements is painful. Potential customers are made to jump through hoops just to use your product.",
        variant: 'primary',
        containerClass: 'd-flex border-bottom py-4',
    },
    {
        avatar: 'users',
        title: 'Your competitors have 10x quicker time to value.',
        description:
            "Your competitors are leveraging automation to onboard new users. They are outpacing your customer acquisition and using software, not people to do it.",
        variant: 'success',
        containerClass: 'd-flex border-bottom pb-4',
    },

    {
        avatar: 'bar-chart',
        title: "You can't scale manual onboarding.",
        description: "Manual data onboarding slows down growth, costs you more in staff time, leads to frustrated customers and increased support tickets. Competitors who have automated this process have gained the edge.",
        variant: 'orange',
        containerClass: 'd-flex pt-4',
    },
];

const plans: PlanItem[] = [
    {
        id: 1,
        name: 'Starter',
        price: '0',
        duration: '/ month',
        features: [
            'Up to 600 minutes usage time',
            'Use for personal only',
            'Add up to 10 attendees',
            '1 User',
            'Technical support via email',
        ],
        isRecommended: false,
    },
    {
        id: 2,
        name: 'Professional',
        price: '99',
        duration: '/ month',
        features: [
            'Up to 6000 minutes usage time',
            'Use for personal or a commercial',
            'Add up to 100 attendees',
            'Up to 5 teams',
            'Technical support via email',
        ],
        isRecommended: true,
    },
    {
        id: 3,
        name: 'Enterprise',
        price: '599',
        duration: '/ month',
        features: [
            'Unlimited usage time',
            'Use for personal or a commercial',
            'Add Unlimited attendees',
            '24x7 Technical support via phone',
            'Technical support via email',
        ],
        isRecommended: false,
    },
];

const features3: Feature3[] = [
    {
        variant: 'teal',
        icon: 'user',
        title: 'Customer experience',
        description: 'Do you make your customers download and fill out a template?',
    },
    {
        variant: 'orange',
        icon: 'clock',
        title: 'Time to value',
        description: 'How long for a customer to get value from your service?',
    },
    {
        variant: 'info',
        icon: 'mail',
        title: 'Customer queries',
        description: 'How many come from data importing? What is the cost per ticket?',
    },
    {
        variant: 'info',
        icon: 'percent',
        title: 'Conversion rate',
        description: 'How many of your lost customers did not upload data? Or did, but failed?',
    },
    {
        variant: 'danger',
        icon: 'dollar-sign',
        title: 'Data migration cost',
        description: 'How much does data wrangling cost you? How about your customer?',
    },
    {
        variant: 'warning',
        icon: 'alert-circle',
        title: 'Competition',
        description: 'Have your competition solved this yet?',
    },
];


export { features, plans, features3 };
