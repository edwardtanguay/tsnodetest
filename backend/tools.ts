export const capitalizeFirstLetter = (text: string) => {
	if (text) {
		return text[0].toUpperCase() + text.slice(1);
	} else {
		return 'ERROR';
	}
}