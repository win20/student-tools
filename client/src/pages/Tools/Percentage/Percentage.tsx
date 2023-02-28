import CalculateButton from 'shared/CalculateButton';
import { Helpers } from 'utils/helpers';
import { useEffect, useState } from 'react';
import SuggestedTools from 'shared/SuggestedTools';
import { Tool } from 'utils/tools';
import { useParams } from 'react-router-dom';

const Percentage = () => {
	const { toolid } = useParams();
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const toolsToSuggest: Tool[] = Helpers.getToolsToSuggest(toolid!);

	useEffect(() => {
		Helpers.windowResizeListener(setWindowWidth);
	});

	const RenderBigScreen = () => {
		return (
			<div id="large-screen-percentage" className="hidden md:flex">
				<div className="mt-5 flex flex-col">
					<div className="mb-5">
						<input id="xInput1" type="text" className="calculator-input" />
						is what percent of
						<input id="yInput1" type="text" className="calculator-input ml-2" />
					</div>
					<div className="mb-5">
						What is{' '}
						<input id="xInput2" type="text" className="calculator-input" />% of{' '}
						<input id="yInput2" type="text" className="calculator-input" />
					</div>
					<div>
						Percentage increase/decrease from
						<input id="xInput3" type="text" className="calculator-input ml-2" />
						to
						<input id="yInput3" type="text" className="calculator-input ml-2" />
					</div>
				</div>

				<div className="mt-5 flex flex-col">
					<div className="mb-5">
						<CalculateButton
							id="output1"
							functionName="Percentage_XIsWhatPercentOfY"
						/>
					</div>
					<div className="mb-5">
						<CalculateButton
							id="output2"
							functionName="Percentage_WhatIsXPercentOfY"
						/>
					</div>
					<div>
						<CalculateButton
							id="output3"
							functionName="Percentage_IncreaseOrDecrease"
						/>
					</div>
				</div>
			</div>
		);
	};

	const RenderSmallScreen = () => {
		return (
			<div id="small-screen-percentage" className="flex flex-col md:hidden">
				<div className="my-5">
					<input id="xInput1" type="text" className="calculator-input" />
					is what percent of
					<input id="yInput1" type="text" className="calculator-input ml-2" />
					<div className="mt-2">
						<CalculateButton
							id="output1"
							functionName="Percentage_XIsWhatPercentOfY"
						/>
					</div>
				</div>
				<div className="my-5">
					What is{' '}
					<input id="xInput2" type="text" className="calculator-input" />% of{' '}
					<input id="yInput2" type="text" className="calculator-input" />
					<div className="mt-2">
						<CalculateButton
							id="output2"
							functionName="Percentage_WhatIsXPercentOfY"
						/>
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
							functionName="Percentage_IncreaseOrDecrease"
						/>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="md:mt-10 responsive-spacing">
			<h1 className="text-xl font-semibold md:text-3xl">
				Percentage Calculators
			</h1>

			{windowWidth > 768 ? <RenderBigScreen /> : <RenderSmallScreen />}

			<SuggestedTools toolsArray={toolsToSuggest} />
		</div>
	);
};

export default Percentage;
