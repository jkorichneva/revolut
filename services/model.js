export const formatInputValue = (value) => {
    return value.toString().replace(/\.(\d\d)\d?$/, '.$1');
}

export const formatToFixed = (value) => {
    return Number.parseFloat(value).toFixed(2)
}
