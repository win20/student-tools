const Percentage_XIsWhatPercentOfY = (inputs: HTMLInputElement[]): string => {
	const x: number = parseFloat(inputs[0].value);
	const y: number = parseFloat(inputs[1].value);
	const answer: number = (x / y) * 100;

	if (Number.isNaN(answer)) return '';

	const answerString: string = Number.isInteger(answer)
		? answer.toString()
		: answer.toFixed(2);

	return answerString + '%';
};

const Percentage_WhatIsXPercentOfY = (inputs: HTMLInputElement[]): string => {
	const x: number = parseFloat(inputs[0].value);
	const y: number = parseFloat(inputs[1].value);
	const answer: number = (x / 100) * y;

	if (Number.isNaN(answer)) return '';

	return Number.isInteger(answer) ? answer.toString() : answer.toFixed(2);
};

const Percentage_IncreaseOrDecrease = (inputs: HTMLInputElement[]): string => {
	const x: number = parseFloat(inputs[0].value);
	const y: number = parseFloat(inputs[1].value);
	const answer: number = ((y - x) / x) * 100;

	if (Number.isNaN(answer)) return '';

	const answerString: string = Number.isInteger(answer)
		? answer.toString()
		: answer.toFixed(2);

	return answerString + '%';
};

const QuadraticFormula_Calculation = (inputs: HTMLInputElement[]): string => {
	const a: number = parseFloat(inputs[0].value);
	const b: number = parseFloat(inputs[1].value);
	const c: number = parseFloat(inputs[2].value);

	const answer = (-a + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

	if (Number.isNaN(answer)) return '';

	return Number.isInteger(answer) ? answer.toString() : answer.toFixed(2);
};

/*
	Add all calculator functions here
*/
export const calculatorsMap: {
	[K: string]: (inputs: HTMLInputElement[]) => string;
} = {
	Percentage_XIsWhatPercentOfY: Percentage_XIsWhatPercentOfY,
	Percentage_WhatIsXPercentOfY: Percentage_WhatIsXPercentOfY,
	Percentage_IncreaseOrDecrease: Percentage_IncreaseOrDecrease,
	QuadraticFormula_Calculation: QuadraticFormula_Calculation,
};
