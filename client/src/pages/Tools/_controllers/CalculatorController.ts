import { Helpers } from 'utils/helpers';
import { calculatorsMap } from './ToolCalculators';

const runFunctionByName = (
	name: string,
	inputs: HTMLInputElement[]
): string => {
	if (calculatorsMap[name]) {
		return calculatorsMap[name](inputs);
	}

	throw new Error(`Method '${name}' is not implemented.`);
};

export default function getCalculationAnswer(
	inputIds: string[],
	functionName: string
): void {
	const number = inputIds[0].match(/[0-9]+/);
	const inputElements: HTMLInputElement[] = [];
	inputIds.forEach((item: string) => {
		inputElements.push(document.getElementById(item) as HTMLInputElement);
	});

	const outputId = `output${number}`;

	const answerResult = runFunctionByName(functionName, inputElements);

	if (answerResult === '') {
		const btn = document.getElementById(`${outputId}-btn`) as HTMLElement;
		Helpers.animateOnEvent(btn, 'animate-shake', 500);
	} else {
		(document.getElementById(outputId) as HTMLInputElement).value =
			answerResult;
	}
}
