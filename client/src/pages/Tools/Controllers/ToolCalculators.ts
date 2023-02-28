// class ToolCalculators {
// 	private static Percentage_XIsWhatPercentOfY(
// 		xInput: HTMLInputElement,
// 		yInput: HTMLInputElement
// 	): string {
// 		const x: number = parseFloat(xInput.value);
// 		const y: number = parseFloat(yInput.value);
// 		const answer: number = (x / y) * 100;
//
// 		if (Number.isNaN(answer)) return '';
//
// 		const answerString: string = Number.isInteger(answer)
// 			? answer.toString()
// 			: answer.toFixed(2);
//
// 		return answerString + '%';
// 	}
//
// 	static Percentage_WhatIsXPercentOfY(
// 		xInput: HTMLInputElement,
// 		yInput: HTMLInputElement
// 	): string {
// 		const x: number = parseFloat(xInput.value);
// 		const y: number = parseFloat(yInput.value);
// 		const answer: number = (x / 100) * y;
//
// 		if (Number.isNaN(answer)) return '';
//
// 		const answerString: string = Number.isInteger(answer)
// 			? answer.toString()
// 			: answer.toFixed(2);
//
// 		return answerString;
// 	}
//
// 	static Percentage_IncreaseOrDecrease(
// 		xInput: HTMLInputElement,
// 		yInput: HTMLInputElement
// 	): string {
// 		const x: number = parseFloat(xInput.value);
// 		const y: number = parseFloat(yInput.value);
// 		const answer: number = ((y - x) / x) * 100;
//
// 		if (Number.isNaN(answer)) return '';
//
// 		const answerString: string = Number.isInteger(answer)
// 			? answer.toString()
// 			: answer.toFixed(2);
//
// 		return answerString + '%';
// 	}
//
// 	static calculatorsMap: {
// 		[K: string]: (xInput: HTMLInputElement, yInput: HTMLInputElement) => string;
// 	} = {
// 		Percentage_XIsWhatPercentOfY: this.Percentage_XIsWhatPercentOfY,
// 	};
// }

const Percentage_XIsWhatPercentOfY = (
	xInput: HTMLInputElement,
	yInput: HTMLInputElement
): string => {
	const x: number = parseFloat(xInput.value);
	const y: number = parseFloat(yInput.value);
	const answer: number = (x / y) * 100;

	if (Number.isNaN(answer)) return '';

	const answerString: string = Number.isInteger(answer)
		? answer.toString()
		: answer.toFixed(2);

	return answerString + '%';
};

const Percentage_WhatIsXPercentOfY = (
	xInput: HTMLInputElement,
	yInput: HTMLInputElement
): string => {
	const x: number = parseFloat(xInput.value);
	const y: number = parseFloat(yInput.value);
	const answer: number = (x / 100) * y;

	if (Number.isNaN(answer)) return '';

	const answerString: string = Number.isInteger(answer)
		? answer.toString()
		: answer.toFixed(2);

	return answerString;
};

const Percentage_IncreaseOrDecrease = (
	xInput: HTMLInputElement,
	yInput: HTMLInputElement
): string => {
	const x: number = parseFloat(xInput.value);
	const y: number = parseFloat(yInput.value);
	const answer: number = ((y - x) / x) * 100;

	if (Number.isNaN(answer)) return '';

	const answerString: string = Number.isInteger(answer)
		? answer.toString()
		: answer.toFixed(2);

	return answerString + '%';
};

/*
	Add all calculator functions here
*/
export const calculatorsMap: {
	[K: string]: (xInput: HTMLInputElement, yInput: HTMLInputElement) => string;
} = {
	Percentage_XIsWhatPercentOfY: Percentage_XIsWhatPercentOfY,
	Percentage_WhatIsXPercentOfY: Percentage_WhatIsXPercentOfY,
	Percentage_IncreaseOrDecrease: Percentage_IncreaseOrDecrease,
};
