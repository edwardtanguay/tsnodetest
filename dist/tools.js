export const capitalizeFirstLetter = (text) => {
    if (text) {
        return text[0].toUpperCase() + text.slice(1);
    }
    else {
        return 'ERROR';
    }
};
