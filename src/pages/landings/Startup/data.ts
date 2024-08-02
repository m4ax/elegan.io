// types
import { Integration, PlanFeature } from './types';

// images
import slack from 'assets/images/brands/slack.png';
import fb from 'assets/images/brands/fb.png';
import salesforce from 'assets/images/brands/salesforce.png';
import at from 'assets/images/brands/at.png';
import gsheet from 'assets/images/brands/gsheet.png';
import ac from 'assets/images/brands/ac.png';

const integrations: Integration[] = [
    {
        appLogo: slack,
        app: 'Snowflake',
        description:
            'Snowflake delivers a data warehouse built entirely for the cloud, providing a high-performance, scalable solution for data storage and analysis.',
    },
    {
        appLogo: fb,
        app: 'Postgres',
        description:
            'Snowflake delivers a data warehouse built entirely for the cloud, providing a high-performance, scalable solution for data storage and analysis.',
    },
    {
        appLogo: salesforce,
        app: 'API Gateway',
        description: 'API Gateway serves as a secure channel for businesses to send and receive data, facilitating seamless communication with our services.',
    },
    {
        appLogo: ac,
        app: 'SQL Server',
        description: 'SQL Server provides a robust database management system for storing and retrieving data as requested by other software applications.',
    },
    {
        appLogo: gsheet,
        app: 'Google Sheets',
        description: 'Google Sheets allows you to create, modify, and collaborate on spreadsheets online, offering real-time data analysis and insights.',
    },
    {
        appLogo: at,
        app: 'Airtable',
        description: 'Organise anything with Airtable, a modern database created for everyone',
    },
];

const planFeatures: PlanFeature[] = [
    {
        name: 'Auto fix',
        starter: {
            available: true,
        },
        professional: {
            available: true,
        },
        enterprise: {
            available: true,
        },
    },
    {
        name: 'Auto Header Mapping',
        starter: {
            available: true,
        },
        professional: {
            available: true,
        },
        enterprise: {
            available: true,
        },
    },
    {
        name: 'AI Error Handling',
        starter: {
            available: true,
        },
        professional: {
            available: true,
        },
        enterprise: {
            available: true,
        },
    },
    {
        name: 'Handle million row files',
        starter: {
            available: false,
        },
        professional: {
            available: true,
        },
        enterprise: {
            available: true,
        },
    },
    {
        name: 'Whitelabel',
        starter: {
            available: false,
        },
        professional: {
            available: true,
        },
        enterprise: {
            available: true,
        },
    },
    {
        name: 'Unlimited monthly rows',
        starter: {
            available: false,
            addon: true,
        },
        professional: {
            available: true,
            addon: true,

        },
        enterprise: {
            available: true,
        },
    },
    // {
    //     "name": "Cost per record",
    //     "starter": {
    //         "available": false,
    //         "addon": true,
    //         "price": "£0.0010" // Example, adjust as needed
    //     },
    //     "professional": {
    //         "available": false,
    //         "addon": true,
    //         "price": "£0.0005" // Example, adjust as needed
    //     },
    //     "enterprise": {
    //         "available": false,
    //         "addon": true,
    //         "price": "Contact us"
    //     }
    // }
    

];

export { integrations, planFeatures };
