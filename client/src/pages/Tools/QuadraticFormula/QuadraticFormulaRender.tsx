import { useEffect, useState } from 'react';
import { Helpers } from '../../../utils/helpers';
import CalculateButton from '../../../shared/CalculateButton';

const RenderBigScreen = () => {
	return (
		<div id="large-screen-percentage" className="hidden md:flex items-baseline">
			<div className="mb-5 mr-32 flex flex-col">
				<div>
					<span> a = </span>
					<input id="aInput" type="text" className="calculator-input mb-2" />
				</div>

				<div>
					<span> b = </span>
					<input id="bInput" type="text" className="calculator-input mb-2" />
				</div>

				<div>
					<span> c = </span>
					<input id="cInput" type="text" className="calculator-input" />
				</div>
			</div>

			<div className="mt-5 flex flex-col">
				<div className="mb-5">
					<CalculateButton
						id="output1"
						inputs={['aInput', 'bInput', 'cInput']}
						functionName="Percentage_XIsWhatPercentOfY"
					/>
				</div>
			</div>
		</div>
	);
};

const QuadraticFormulaRender = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		Helpers.windowResizeListener(setWindowWidth);
	});

	return (
		<>
			<RenderBigScreen />
		</>
	);
};

export default QuadraticFormulaRender;
