export const gbConvertion = (sizeInGB) => {
    if (sizeInGB < 1) {
        return sizeInGB * 1000 + "MB";
    } else if (sizeInGB < 1000) {
        return Math.floor(sizeInGB) + "GB";
    } else {
        return Math.floor(sizeInGB / 1000) + "TB";
    }
}

export const convertSize = (sizeInMB) => {
    if (sizeInMB < 1000) {
        return sizeInMB + " MB";
    } else if (sizeInMB < 1000 ** 2) {
        return (sizeInMB / 1000).toFixed(2) + " GB";
    } else if (sizeInMB < 1000 ** 3) {
        return (sizeInMB / (1000 ** 2)).toFixed(2) + " TB";
    } else if (sizeInMB < 1000 ** 4) {
        return (sizeInMB / (1000 ** 3)).toFixed(2) + " PB";
    } else {
        return (sizeInMB / (1000 ** 4)).toFixed(2) + " EB";
    }
}

export const getUnitBasedOnMaxMin = (max, min) => {
    const avrg = (max+min)/2;
    let unit = "GB";
    if (avrg >= 2) {
        unit = "TB";
        return unit;
    }
    return unit;
}