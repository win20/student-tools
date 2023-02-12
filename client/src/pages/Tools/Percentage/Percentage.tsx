import ToolCalculators from 'utils/toolCalculators';
import CalculateButton from 'shared/CalculateButton';
import { Helpers } from 'utils/helpers';
import { useEffect, useState } from 'react';
import SuggestedTools from 'shared/SuggestedTools';
import { Tool, toolsArray } from 'utils/tools';

const Percentage = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	function getToolsToSuggest() {
		const tools: Tool[] = [];
		toolsArray.forEach((tool: Tool) => {
			if (tool.title.toLowerCase().includes('percentage')) {
				tools.push(tool);
			}
		});

		return tools;
	}

	const toolsToSuggest: Tool[] = getToolsToSuggest();

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	});

	const xIsWhatPercentOfY = () => {
		const xInput = document.getElementById('xInput1') as HTMLInputElement;
		const yInput = document.getElementById('yInput1') as HTMLInputElement;

		const answer = ToolCalculators.Percentage_XIsWhatPercentOfY(xInput, yInput);

		if (answer === '') {
			const btn = document.getElementById('output1-btn') as HTMLElement;
			Helpers.animateOnEvent(btn, 'animate-shake', 500);
		} else {
			(document.getElementById('output1') as HTMLInputElement).value = answer;
		}
	};

	const whatIsXPercentOfY = () => {
		const xInput = document.getElementById('xInput2') as HTMLInputElement;
		const yInput = document.getElementById('yInput2') as HTMLInputElement;

		const answer = ToolCalculators.Percentage_WhatIsXPercentOfY(xInput, yInput);

		if (answer === '') {
			const btn = document.getElementById('output2-btn') as HTMLElement;
			Helpers.animateOnEvent(btn, 'animate-shake', 500);
		} else {
			(document.getElementById('output2') as HTMLInputElement).value = answer;
		}
	};

	const percentageIncreaseOrDecrease = () => {
		const xInput = document.getElementById('xInput3') as HTMLInputElement;
		const yInput = document.getElementById('yInput3') as HTMLInputElement;

		const answer = ToolCalculators.Percentage_IncreaseOrDecrease(
			xInput,
			yInput
		);

		if (answer === '') {
			const btn = document.getElementById('output3-btn') as HTMLElement;
			Helpers.animateOnEvent(btn, 'animate-shake', 500);
		} else {
			(document.getElementById('output3') as HTMLInputElement).value = answer;
		}
	};

	return (
		<div className="md:mt-10 responsive-spacing">
			<h1 className="text-xl font-semibold md:text-3xl">
				Percentage Calculators
			</h1>

			{windowWidth > 640 && (
				<div id="large-screen-percentage" className="hidden md:flex">
					<div className="mt-5 flex flex-col">
						<div className="mb-5">
							<input id="xInput1" type="text" className="calculator-input" />
							is what percent of
							<input
								id="yInput1"
								type="text"
								className="calculator-input ml-2"
							/>
						</div>
						<div className="mb-5">
							What is{' '}
							<input id="xInput2" type="text" className="calculator-input" />%
							of <input id="yInput2" type="text" className="calculator-input" />
						</div>
						<div>
							Percentage increase/decrease from
							<input
								id="xInput3"
								type="text"
								className="calculator-input ml-2"
							/>
							to
							<input
								id="yInput3"
								type="text"
								className="calculator-input ml-2"
							/>
						</div>
					</div>

					<div className="mt-5 flex flex-col">
						<div className="mb-5">
							<CalculateButton id="output1" function={xIsWhatPercentOfY} />
						</div>
						<div className="mb-5">
							<CalculateButton id="output2" function={whatIsXPercentOfY} />
						</div>
						<div>
							<CalculateButton
								id="output3"
								function={percentageIncreaseOrDecrease}
							/>
						</div>
					</div>
				</div>
			)}

			{/* Small screens */}
			<div id="small-screen-percentage" className="flex flex-col md:hidden">
				<div className="my-5">
					<input id="xInput1" type="text" className="calculator-input" />
					is what percent of
					<input id="yInput1" type="text" className="calculator-input ml-2" />
					<div className="mt-2">
						<CalculateButton id="output1" function={xIsWhatPercentOfY} />
					</div>
				</div>
				<div className="my-5">
					What is{' '}
					<input id="xInput2" type="text" className="calculator-input" />% of{' '}
					<input id="yInput2" type="text" className="calculator-input" />
					<div className="mt-2">
						<CalculateButton id="output2" function={whatIsXPercentOfY} />
					</div>
				</div>

				<div className="my-5">
					Percentage increase/decrease from
					<input id="xInput3" type="text" className="calculator-input ml-2" />
					to
					<input id="yInput3" type="text" className="calculator-input ml-2" />
					<div className="mt-2">
						<CalculateButton
							id="output3"
							function={percentageIncreaseOrDecrease}
						/>
					</div>
				</div>
			</div>

			<SuggestedTools toolsArray={toolsToSuggest} />
		</div>
	);
};

export default Percentage;
