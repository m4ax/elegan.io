export type Integration = {
    appLogo: string;
    app: string;
    description: string;
}

type Availability = {
    available: boolean;
    addon?: boolean;
    price?: string;
}

export type PlanFeature = {
    name: string;
    starter: Availability;
    professional: Availability;
    enterprise: Availability;
}
