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
        description: 'API Gateway serves as a secure channel for businesses to send and receive data, facilitating seamless integration and communication with our services.',
    },
    {
        appLogo: at,
        app: 'Airtable',
        description: 'Organise anything with Airtable, a modern database created for everyone',
    },
    {
        appLogo: gsheet,
        app: 'Google Sheets',
        description: 'Google Sheets allows you to create, modify, and collaborate on spreadsheets online, offering real-time data analysis and insights.',
    },
    {
        appLogo: ac,
        app: 'SQL Server',
        description: 'SQL Server provides a robust database management system for storing and retrieving data as requested by other software applications.',
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
        name: 'Custom functions & validations',
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
        name: 'Unlimited monthly rows',
        starter: {
            available: false,
            addon: true,
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
        name: 'Private hosting',
        starter: {
            available: false,
        },
        professional: {
            available: false,
        },
        enterprise: {
            available: false,
            addon: true,
        },
    },
    {
        "name": "Cost per record",
        "starter": {
            "available": false,
            "addon": true,
            "price": "£0.0010/row" // Example, adjust as needed
        },
        "professional": {
            "available": false,
            "addon": true,
            "price": "£0.0005/row" // Example, adjust as needed
        },
        "enterprise": {
            "available": false,
            "addon": true,
            "price": "£0.0001/row"
        }
    }
    

];

export { integrations, planFeatures };
