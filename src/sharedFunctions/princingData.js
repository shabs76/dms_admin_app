import { gbConvertion } from "./storageConvent";

export const CustomPriceDataFun = (PlanState) => {
    const CustomPriceData = {
        head: 'Custom & Email Plan',
        plan_id: PlanState.Custom.plan_id,
        Price: PlanState.Custom.price,
        user_low: PlanState.Custom.min_users,
        user_high: PlanState.Custom.max_users,
        Estore_low: PlanState.Custom.min_e_storage,
        Estore_high: PlanState.Custom.max_e_storage,
        DStore_low: PlanState.Custom.min_c_storage,
        DStore_high: PlanState.Custom.max_c_storage,
        para_shot: 'Choose exactly what your business needs',
        para: 'You have the power to choose exactly what your business needs, from custom email and cloud storage to powerful office applications and dedicated servers. You can select the number of users you need and tailor your bundle to fit your unique requirements. With flexible pricing options and unparalleled support, you can have peace of mind knowing that your business has the tools it needs to thrive.',
    }
    return CustomPriceData
}

export const PricingDataFun = (PlanState) => {

    const PricingData = [
        {
            head: 'Startup',
            para: 'Get essential tools for growing businesses at an affordable price.',
            para_shot: `${PlanState.Startup.max_users} Users, ${gbConvertion(PlanState.Startup.min_e_storage+PlanState.Startup.max_e_storage+PlanState.Startup.min_c_storage+PlanState.Startup.max_c_storage)}, Office, Drive & Email`,
            color: 'transparent',
            plan_id: PlanState.Startup.plan_id,
            pricing: PlanState.Startup.price,
            user_low: PlanState.Startup.min_users,
            user_high: PlanState.Startup.max_users,
            Estore_low: PlanState.Startup.min_e_storage,
            Estore_high: PlanState.Startup.max_e_storage,
            DStore_low: PlanState.Startup.min_c_storage,
            DStore_high: PlanState.Startup.max_c_storage,
            style: {
                icon: 'IconstartupStyleStrip',
                main: 'startupStyleStrip',
                button: 'ButtonstartupStyleStrip',
            },
            features: [
                {
                    name: 'Users',
                    value: `up to ${PlanState.Startup.max_users}`,
                    id: 'users_startup',
                },
                {
                    name: 'Email Storage',
                    value: `${gbConvertion(PlanState.Startup.min_e_storage)} - ${gbConvertion(PlanState.Startup.max_e_storage)}`,
                    id: 'emailStore_startup',
                },
                {
                    name: 'Drive Storage',
                    value: `${gbConvertion(PlanState.Startup.min_c_storage)} - ${gbConvertion(PlanState.Startup.max_c_storage)}`,
                    id: 'driveStore_startup',
                },
                {
                    name: 'Space Office Suite',
                    value: '',
                    id: 'office_startup'
                },
                {
                    name: 'Talk (Chat, voice & video calls/meetings)',
                    value: '',
                    id: 'talk_startup',
                },
                {
                    name: 'Deck',
                    value: '',
                    id: 'deck_startup',
                },
                {
                    name: 'Photo',
                    value: '',
                    id: 'photo_startup',
                },
            ]
        },
        {
            head: 'Business Plus',
            para: 'Boost productivity with additional storage and advanced collaboration features.',
            color: '#F4FAF7',
            plan_id: PlanState['Business Plus'].plan_id,
            para_shot: `${PlanState['Business Plus'].max_users} Users, ${gbConvertion(PlanState['Business Plus'].min_e_storage+PlanState['Business Plus'].max_e_storage+PlanState['Business Plus'].min_c_storage+PlanState['Business Plus'].max_c_storage)}, Office, Drive & Email`,
            pricing: PlanState['Business Plus'].price,
            user_low: PlanState['Business Plus'].min_users,
            user_high: PlanState['Business Plus'].max_users,
            Estore_low: PlanState['Business Plus'].min_e_storage,
            Estore_high: PlanState['Business Plus'].max_e_storage,
            DStore_low: PlanState['Business Plus'].min_c_storage,
            DStore_high: PlanState['Business Plus'].max_c_storage,
            style: {
                icon: 'IconBusinessPlusStyleStrip',
                main: 'BusinessPlusStyleStrip',
                button: 'ButtonBusinessPlusStyleStrip',
            },
            features: [
                {
                    name: 'Users',
                    value: `up to ${PlanState['Business Plus'].max_users}`,
                    id: 'users_plus',
                },
                {
                    name: 'Email Storage',
                    value: `${gbConvertion(PlanState['Business Plus'].min_e_storage)} - ${gbConvertion(PlanState['Business Plus'].max_e_storage)}`,
                    id: 'emailstore_plus',
                },
                {
                    name: 'Drive Storage',
                    value: `${gbConvertion(PlanState['Business Plus'].min_c_storage)} - ${gbConvertion(PlanState['Business Plus'].max_c_storage)}`,
                    id: 'driveStore_plus',
                },
                {
                    name: 'Space Office Suite',
                    value: '',
                    id: 'office_plus',
                },
                {
                    name: 'Talk (Chat, voice & video calls/meetings)',
                    value: '',
                    id: 'talk_plus',
                },
                {
                    name: 'Deck',
                    value: '',
                    id: 'deck_plus',
                },
                {
                    name: 'Photo',
                    value: '',
                    id: 'photo_plus',
                },
                {
                    name: 'Appointment Manager',
                    value: '',
                    id: 'appointment_plus',
                },
                {
                    name: 'Special Training',
                    value: '',
                    id: 'traing_plus',
                },
            ]
        },
        {
            head: 'Business Pro',
            para: 'Elevate your business with enterprise-grade security and large storage.',
            color: '#E3F3E4',
            plan_id: PlanState['Business Pro'].plan_id,
            para_shot: `${PlanState['Business Pro'].max_users} Users, ${gbConvertion(PlanState['Business Pro'].min_e_storage+PlanState['Business Pro'].max_e_storage+PlanState['Business Pro'].min_c_storage+PlanState['Business Pro'].max_c_storage)}, Office, Drive & Email`,
            pricing: PlanState['Business Pro'].price,
            user_low: PlanState['Business Pro'].min_users,
            user_high: PlanState['Business Pro'].max_users,
            Estore_low: PlanState['Business Pro'].min_e_storage,
            Estore_high: PlanState['Business Pro'].max_e_storage,
            DStore_low: PlanState['Business Pro'].min_c_storage,
            DStore_high: PlanState['Business Pro'].max_c_storage,
            style: {
                icon: 'IconBusinessProStyleStrip',
                main: 'BusinessProStyleStrip',
                button: 'ButtonBusinessProStyleStrip',
            },
            features: [
                {
                    name: 'Users',
                    value: `up to ${PlanState['Business Pro'].max_users}`,
                    id: 'users_pro'
                },
                {
                    name: 'Email Storage',
                    value: `${gbConvertion(PlanState['Business Pro'].min_e_storage)} - ${gbConvertion(PlanState['Business Pro'].max_e_storage)}`,
                    id: 'emailStore_pro'
                },
                {
                    name: 'Drive Storage',
                    value: `${gbConvertion(PlanState['Business Pro'].min_c_storage)} - ${gbConvertion(PlanState['Business Pro'].max_c_storage)}`,
                    id: 'driveStore_pro'
                },
                {
                    name: 'Space Office Suite',
                    value: '',
                    id: 'office_pro'
                },
                {
                    name: 'Talk (Chat, voice & video calls/meetings)',
                    value: '',
                    id: 'talk_pro'
                },
                {
                    name: 'Deck',
                    value: '',
                    id: 'deck_pro'
                },
                {
                    name: 'Photo',
                    value: '',
                    id: 'photo_pro'
                },
                {
                    name: 'Appointment Manager',
                    value: '',
                    id: 'appointment_pro'
                },
                {
                    name: 'Special Training',
                    value: '',
                    id: 'training_pro'
                },
            ]
        },
        {
            head: 'Enterprise',
            para: 'Scale your business with advanced customization and premium support.',
            color: '#008134',
            plan_id: PlanState.Enterprise.plan_id,
            para_shot: 'Unlimited Configuration',
            pricing: '',
            price: PlanState.Enterprise.price,
            user_low: PlanState.Enterprise.min_users,
            user_high: PlanState.Enterprise.max_users,
            Estore_low: PlanState.Enterprise.min_e_storage,
            Estore_high: PlanState.Enterprise.max_e_storage,
            DStore_low: PlanState.Enterprise.min_c_storage,
            DStore_high: PlanState.Enterprise.max_c_storage,
            style: {
                icon: 'IconenterpriseStyleStrip',
                main: 'enterpriseStyleStrip',
                button: 'ButtonenterpriseStyleStrip'
            },
            features: [
                {
                    name: 'Users',
                    value: 'Unlimited',
                    id: 'user_enter',
                },
                {
                    name: 'Email Storage',
                    value: `up to ${gbConvertion(PlanState.Enterprise.max_e_storage)}`,
                    id: 'emailStore_enter',
                },
                {
                    name: 'Drive Storage',
                    value: 'Unlimited',
                    id: 'driveStore_enter',
                },
                {
                    name: 'Email Storage',
                    value: `${gbConvertion(PlanState.Enterprise.min_e_storage)} - ${gbConvertion(PlanState.Enterprise.max_e_storage)}`,
                    id: 'emailStore_startup',
                },
                {
                    name: 'Drive Storage',
                    value: `${gbConvertion(PlanState.Enterprise.min_c_storage)} - ${gbConvertion(PlanState.Enterprise.max_c_storage)}`,
                    id: 'driveStore_startup',
                },
                {
                    name: 'Space Office Suite',
                    value: '',
                    id: 'officeEnter_enter',
                },
                {
                    name: 'Talk (Chat, voice & video calls/meetings)',
                    value: '',
                    id: 'talk_enter',
                },
                {
                    name: 'Deck',
                    value: '',
                    id: 'deck_enter',
                },
                {
                    name: 'Photo',
                    value: '',
                    id: 'photo_enter',
                },
                {
                    name: 'Appointment Manager',
                    value: '',
                    id: 'appointment_enter',
                },
                {
                    name: 'Special Training',
                    value: '',
                    id: 'training_enter',
                },
                {
                    name: 'Dedicated Support',
                    value: '',
                    id: 'support_enter',
                },
            ]
        },
    ];
    return PricingData;
}
