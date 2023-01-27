import ToolCalculators from 'utils/toolCalculators';
import CalculateButton from 'shared/CalculateButton';

const Percentage = () => {
	const xIsWhatPercentOfY = () => {
		const xInput = document.getElementById('xInput1') as HTMLInputElement;
		const yInput = document.getElementById('yInput1') as HTMLInputElement;

		const answer = ToolCalculators.Percentage_XIsWhatPercentOfY(xInput, yInput);

		(document.getElementById('output1') as HTMLInputElement).value = answer;
	};

	const whatIsXPercentOfY = () => {
		const xInput = document.getElementById('xInput2') as HTMLInputElement;
		const yInput = document.getElementById('yInput2') as HTMLInputElement;

		const answer = ToolCalculators.Percentage_WhatIsXPercentOfY(xInput, yInput);

		(document.getElementById('output2') as HTMLInputElement).value = answer;
	};

	return (
		<div className="lg:px-64 mt-10">
			<h1 className="text-3xl font-medium">Percentage Calculators</h1>

			<div className="mt-5 ">
				<input id="xInput1" type="text" className="calculator-input" />
				is what percent of
				<input id="yInput1" type="text" className="calculator-input ml-2" />
				<CalculateButton id="output1" function={xIsWhatPercentOfY} />
			</div>

			<div className="mt-5">
				What is <input id="xInput2" type="text" className="calculator-input" />%
				of <input id="yInput2" type="text" className="calculator-input" />
				<CalculateButton id="output2" function={whatIsXPercentOfY} />
			</div>

			{/* <div>
				<span>Percentage increase/decrease</span>
				<span>
					from <input type="text" /> to <input type="text" />
				</span>
			</div> */}
		</div>
	);
};

export default Percentage;
