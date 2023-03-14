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

const Density = (inputs: HTMLInputElement[]): string => {
	const x: number = parseFloat(inputs[0].value);
	const y: number = parseFloat(inputs[1].value);
	const answer = x / y;

	return answerFormatter(answer);
};

const Velocity = (inputs: HTMLInputElement[]): string => {
	const u: number = parseFloat(inputs[0].value);
	const a: number = parseFloat(inputs[1].value);
	const t: number = parseFloat(inputs[2].value);
	const answer = u + a * t;

	return answerFormatter(answer, ' m/s');
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
	Density,
	Velocity,
};
