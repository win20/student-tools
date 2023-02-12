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

describe('Test the calculations', () => {
	// ? These tests should inherently cover corresponding functions in toolCalculators.ts
	it('xIsWhatPercentOfY - should display correct output', async () => {
		render(<MockPercentagePage />);

		const xInput = document.getElementById('xInput1') as HTMLInputElement;
		const yInput = document.getElementById('yInput1') as HTMLInputElement;
		const outputBtn = document.getElementById(
			'output1-btn'
		) as HTMLButtonElement;
		const output = document.getElementById('output1') as HTMLInputElement;

		await userEvent.type(xInput, '20');
		await userEvent.type(yInput, '100');
		await userEvent.click(outputBtn);

		expect(output).toHaveValue('20%');
	});

	it('whatIsXPercentOfY - should display correct output', async () => {
		render(<MockPercentagePage />);

		const xInput = document.getElementById('xInput2') as HTMLInputElement;
		const yInput = document.getElementById('yInput2') as HTMLInputElement;
		const outputBtn = document.getElementById(
			'output2-btn'
		) as HTMLButtonElement;
		const output = document.getElementById('output2') as HTMLInputElement;

		await userEvent.type(xInput, '20');
		await userEvent.type(yInput, '100');
		await userEvent.click(outputBtn);

		expect(output).toHaveValue('20');
	});

	it('percentageIncreaseOrDecrease - should display correct output', async () => {
		render(<MockPercentagePage />);

		const xInput = document.getElementById('xInput3') as HTMLInputElement;
		const yInput = document.getElementById('yInput3') as HTMLInputElement;
		const outputBtn = document.getElementById(
			'output3-btn'
		) as HTMLButtonElement;
		const output = document.getElementById('output3') as HTMLInputElement;

		await userEvent.type(xInput, '10');
		await userEvent.type(yInput, '20');
		await userEvent.click(outputBtn);

		expect(output).toHaveValue('100%');
	});
});
