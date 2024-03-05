// types
import { Integration, PlanFeature } from './types';

// images
import slack from 'assets/images/brands/slack.png';
import fb from 'assets/images/brands/fb.png';
import salesforce from 'assets/images/brands/salesforce.jpg';
import at from 'assets/images/brands/at.png';
import gsheet from 'assets/images/brands/gsheet.png';
import ac from 'assets/images/brands/ac.jpeg';

const integrations: Integration[] = [
    {
        appLogo: slack,
        app: 'Snowflake',
        description:
            'Slack is a platform for team communication: everything in one place, instantly searchable, available wherever you go',
    },
    {
        appLogo: fb,
        app: 'Postgres',
        description:
            'Facebook lead ads make signing up for business information easy for people and more valuable for businesses',
    },
    {
        appLogo: salesforce,
        app: 'API Gateway',
        description: 'Salesforce is a leading enterprise customer relationship manager (CRM) application',
    },
    {
        appLogo: at,
        app: 'Airtable',
        description: 'Organize anything with Airtable, a modern database created for everyone',
    },
    {
        appLogo: gsheet,
        app: 'Google Sheets',
        description: 'Create, edit, and share spreadsheets with Google Sheets, and get automated insights from data',
    },
    {
        appLogo: ac,
        app: 'SQL Server',
        description: 'ActiveCampaign combines all aspects of email marketing into a single and easy- to - use platform',
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
