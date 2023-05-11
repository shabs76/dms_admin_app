export const CalculatorFun = (type, c_storage, e_storage, users, bundle_price, addonState) => {
    if (type === 'space') {
        const price = spaceCalculator(bundle_price, c_storage, e_storage, users, addonState);
        return price;
    }

    const price = bMailer(e_storage, users, addonState, bundle_price);
    return price;
}
const spaceCalculator = (price_bundle, c_storage, e_storage, users, addons) => {
    const c_price = addons.c_storage_low.addon_price*12;
    const c_priceH = addons.c_storage_high.addon_price*12;
    const e_price = addons.e_storage_space.addon_price*12;
    const e_priceH = addons.e_storage_space_high.addon_price*12;
    const u_price = addons.user_space.addon_price*12;

    let c_pricing = c_price*c_storage;
    if (c_storage > 100) {
        c_pricing = c_priceH*c_storage;
    }

    let e_pricing = e_price*e_storage;
    if (e_storage > 50) {
        e_pricing = e_priceH*e_storage;
    }

    let u_pricing = users*u_price;

    const t_pricing = Math.ceil(price_bundle+e_pricing+c_pricing+u_pricing);

    return t_pricing;
}


const bMailer = (e_storage, users, addons, bundle_price) => {
    // users is are free when they have more than 2.5gb
    const priceH = addons.e_storage_high.addon_price;
    const priceM = addons.e_storage_medium.addon_price;
    const priceL = addons.e_storage_low.addon_price;
    const u_price = addons.user_mailer.addon_price;

    // calculate number of free users
    const fr_users = Math.round(e_storage/2.5);

    // number of paying users
    const py_users = users - fr_users;
    
    let e_pricing = priceH * e_storage;
    if (e_storage < 25 && e_storage > 5) {
        e_pricing = priceM * e_storage;
    } else if (e_storage < 5) {
        e_pricing = priceL*e_storage;
    }

    let u_pricing = py_users * u_price;
    if (u_pricing < 0) {
        u_pricing = 0;
    }
    const t_pricing = Math.ceil(u_pricing + e_pricing + bundle_price);

    return t_pricing;
}