import { expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Percentage from '../Percentage';

const MockPercentagePage = (): JSX.Element => {
	return (
		<MemoryRouter>
			<Percentage />
		</MemoryRouter>
	);
};

type testCalculatorFunctionsParams = {
	xInputId: string;
	yInputId: string;
	outputId: string;
	testXInput: string;
	testYInput: string;
};

const setupCalculatorTests = async (
	params: testCalculatorFunctionsParams
): Promise<string> => {
	const xInput = document.getElementById(params.xInputId) as HTMLInputElement;
	const yInput = document.getElementById(params.yInputId) as HTMLInputElement;
	const outputBtn = document.getElementById(
		`${params.outputId}-btn`
	) as HTMLButtonElement;
	const output = document.getElementById(params.outputId) as HTMLInputElement;

	await userEvent.type(xInput, params.testXInput);
	await userEvent.type(yInput, params.testYInput);
	await userEvent.click(outputBtn);

	return output.value;
};

describe('Conditional page rendering', () => {
	it('should render correct small screen version of page', () => {
		global.window.innerWidth = 300;
		render(<MockPercentagePage />);

		const divElement = document.getElementById('small-screen-percentage');
		expect(divElement).toHaveClass('md:hidden');
	});

	it('should render correct large screen version of page', () => {
		global.window.innerWidth = 1000;
		render(<MockPercentagePage />);

		const divElement = document.getElementById('large-screen-percentage');
		expect(divElement).toHaveClass('md:flex');
	});
});

describe('Input validation', () => {
	it('should have empty output if invalid input is entered, if output is already empty', async () => {
		render(<MockPercentagePage />);

		const xInput = document.getElementById('xInput1') as HTMLInputElement;
		const yInput = document.getElementById('yInput1') as HTMLInputElement;
		const outputBtn = document.getElementById(
			'output1-btn'
		) as HTMLButtonElement;
		const output = document.getElementById('output1') as HTMLInputElement;

		await userEvent.type(xInput, 'invalid');
		await userEvent.type(yInput, 'invalid');
		await userEvent.click(outputBtn);

		expect(output).toHaveValue('');
	});

	it('should have unchanged output from previous calculation, if output is not empty', async () => {
		render(<MockPercentagePage />);

		const xInput = document.getElementById('xInput1') as HTMLInputElement;
		const yInput = document.getElementById('yInput1') as HTMLInputElement;
		const outputBtn = document.getElementById(
			'output1-btn'
		) as HTMLButtonElement;
		const output = document.getElementById('output1') as HTMLInputElement;

		await userEvent.type(xInput, '10');
		await userEvent.type(yInput, '100');
		await userEvent.click(outputBtn);

		await userEvent.type(xInput, 'invalid');
		await userEvent.type(yInput, 'invalid');
		await userEvent.click(outputBtn);

		expect(output).toHaveValue('10%');
	});

	it('should animate button when invalid input is entered', async () => {
		render(<MockPercentagePage />);

		const xInput = document.getElementById('xInput1') as HTMLInputElement;
		const yInput = document.getElementById('yInput1') as HTMLInputElement;
		const outputBtn = document.getElementById(
			'output1-btn'
		) as HTMLButtonElement;

		await userEvent.type(xInput, 'invalid');
		await userEvent.type(yInput, 'invalid');
		await userEvent.click(outputBtn);

		expect(outputBtn).toHaveClass('animate-shake');
	});
});

// ? These tests should inherently cover corresponding functions in toolCalculators.ts
describe('Percentage_XIsWhatPercentOfY', () => {
	it('should display correct output - integer output', async () => {
		render(<MockPercentagePage />);

		const answer = await setupCalculatorTests({
			xInputId: 'xInput1',
			yInputId: 'yInput1',
			outputId: 'output1',
			testXInput: '20',
			testYInput: '100',
		});

		expect(answer).toBe('20%');
	});

	it('should display correct output - float output (2 d.p.)', async () => {
		render(<MockPercentagePage />);

		const answer = await setupCalculatorTests({
			xInputId: 'xInput1',
			yInputId: 'yInput1',
			outputId: 'output1',
			testXInput: '10.58',
			testYInput: '50',
		});

		expect(answer).toBe('21.16%');
	});

	it('should display empty string if inputs are invalid', async () => {
		render(<MockPercentagePage />);

		const answer = await setupCalculatorTests({
			xInputId: 'xInput1',
			yInputId: 'yInput1',
			outputId: 'output1',
			testXInput: 'invalid',
			testYInput: 'invalid',
		});

		expect(answer).toBe('');
	});
});

describe('Percentage_WhatIsXPercentOfY', () => {
	it('should display correct output - integer output', async () => {
		render(<MockPercentagePage />);

		const answer = await setupCalculatorTests({
			xInputId: 'xInput2',
			yInputId: 'yInput2',
			outputId: 'output2',
			testXInput: '20',
			testYInput: '100',
		});

		expect(answer).toBe('20');
	});

	it('should display correct output - float output (2 d.p.)', async () => {
		render(<MockPercentagePage />);

		const answer = await setupCalculatorTests({
			xInputId: 'xInput2',
			yInputId: 'yInput2',
			outputId: 'output2',
			testXInput: '10.58',
			testYInput: '50',
		});

		expect(answer).toBe('5.29');
	});

	it('should display empty string on invalid input', async () => {
		render(<MockPercentagePage />);

		const answer = await setupCalculatorTests({
			xInputId: 'xInput2',
			yInputId: 'yInput2',
			outputId: 'output2',
			testXInput: 'invalid',
			testYInput: 'invalid',
		});

		expect(answer).toBe('');
	});
});

describe('Percentage_IncreaseOrDecrease', () => {
	it('should display correct output - integer output', async () => {
		render(<MockPercentagePage />);

		const answer = await setupCalculatorTests({
			xInputId: 'xInput3',
			yInputId: 'yInput3',
			outputId: 'output3',
			testXInput: '10',
			testYInput: '20',
		});

		expect(answer).toBe('100%');
	});

	it('should display correct output - float output (2 d.p.)', async () => {
		render(<MockPercentagePage />);

		const answer = await setupCalculatorTests({
			xInputId: 'xInput3',
			yInputId: 'yInput3',
			outputId: 'output3',
			testXInput: '10.58',
			testYInput: '50',
		});

		expect(answer).toBe('372.59%');
	});

	it('should display empty string on invalid input', async () => {
		render(<MockPercentagePage />);

		const answer = await setupCalculatorTests({
			xInputId: 'xInput3',
			yInputId: 'yInput3',
			outputId: 'output3',
			testXInput: 'invalid',
			testYInput: 'invalid',
		});

		expect(answer).toBe('');
	});
});
