class Helpers {
	static stripAllSpaces(inputStr: string): string {
		return inputStr.replace(/\s/g, '');
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
}

export { Helpers };
