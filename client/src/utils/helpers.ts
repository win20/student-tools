class Helpers {
	static stripAllSpaces(input: string): string {
		return input.replace(/\s/g, '');
	}

	static animateOnEvent(
		element: HTMLElement,
		animation: string,
		timeoutInMs: number
	) {
		element.classList.add(animation);
		setTimeout(() => {
			element.classList.remove(animation);
		}, timeoutInMs);
	}

	static urlCleaner(input: string): string {
		const lowerCase = input.toLowerCase();
		const cleanUrl = lowerCase.replace(/ /g, '-');
		return cleanUrl;
	}
}

export { Helpers };
