import { Helpers } from 'utils/helpers';
import { calculatorsMap } from './ToolCalculators';
import { MouseEvent } from 'react';

const runFunctionByName = (
	name: string,
	xInput: HTMLInputElement,
	yInput: HTMLInputElement
): string => {
	if (calculatorsMap[name]) {
		return calculatorsMap[name](xInput, yInput);
	}

	throw new Error(`Method '${name}' is not implemented.`);
};

export default function getCalculationAnswer(
	event: MouseEvent,
	functionName: string
): void {
	const btnId = event.currentTarget.id;
	const number = btnId.match(/[0-9]+/);

	const xInputId = `xInput${number}`;
	const yInputId = `yInput${number}`;
	const outputId = `output${number}`;

	const xInput = document.getElementById(xInputId) as HTMLInputElement;
	const yInput = document.getElementById(yInputId) as HTMLInputElement;

	const answerResult = runFunctionByName(functionName, xInput, yInput);

	if (answerResult === '') {
		const btn = document.getElementById(`${outputId}-btn`) as HTMLElement;
		Helpers.animateOnEvent(btn, 'animate-shake', 500);
	} else {
		(document.getElementById(outputId) as HTMLInputElement).value =
			answerResult;
	}
}
