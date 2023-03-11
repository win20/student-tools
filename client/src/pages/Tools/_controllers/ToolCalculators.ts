const answerFormatter = (answer: number, suffix = '') => {
	if (Number.isNaN(answer)) return '';

	const answerString: string = Number.isInteger(answer)
		? answer.toString()
		: answer.toFixed(2);

	return answerString + suffix;
};

const Percentage_XIsWhatPercentOfY = (inputs: HTMLInputElement[]): string => {
	const x: number = parseFloat(inputs[0].value);
	const y: number = parseFloat(inputs[1].value);
	const answer: number = (x / y) * 100;

	return answerFormatter(answer, '%');
};

const Percentage_WhatIsXPercentOfY = (inputs: HTMLInputElement[]): string => {
	const x: number = parseFloat(inputs[0].value);
	const y: number = parseFloat(inputs[1].value);
	const answer: number = (x / 100) * y;

	return answerFormatter(answer);
};

const Percentage_IncreaseOrDecrease = (inputs: HTMLInputElement[]): string => {
	const x: number = parseFloat(inputs[0].value);
	const y: number = parseFloat(inputs[1].value);
	const answer: number = ((y - x) / x) * 100;

	return answerFormatter(answer, '%');
};

const FractionToPercentage = (inputs: HTMLInputElement[]): string => {
	const x: number = parseFloat(inputs[0].value);
	const y: number = parseFloat(inputs[1].value);
	const answer = (x / y) * 100;

	return answerFormatter(answer, '%');
};

const AreaOfACircle = (inputs: HTMLInputElement[]): string => {
	const x: number = parseFloat(inputs[0].value);
	const answer = Math.PI * Math.pow(x, 2);

	return answerFormatter(answer);
};

/*
	Add all calculator functions here
*/
export const calculatorsMap: {
	[K: string]: (inputs: HTMLInputElement[]) => string;
} = {
	Percentage_XIsWhatPercentOfY,
	Percentage_WhatIsXPercentOfY,
	Percentage_IncreaseOrDecrease,
	FractionToPercentage,
	AreaOfACircle,
};
