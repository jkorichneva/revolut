export const formatToFixed = (value) => {
    return Number.parseFloat(value).toFixed(2)
};

export const formatValue = (value) => {
    let result = false;
    let regex = new RegExp('^\\d*(\\.\\d{0,2})?$', 'g');
    if (regex.test(value)) {
        result = true;
    }
    return result;
};