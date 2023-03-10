import CalculateButton from 'shared/CalculateButton';

const RenderBigScreen = () => {
	return (
		<div id="large-screen-percentage" className="md:flex">
			<div className="mt-5 flex flex-col">
				<input id="xInput1" type="text" className="calculator-input" />
				<hr className="w-28 border-none h-1 bg-slate-700 text-slate-700 mt-2 mb-2 mr-2" />
				<input id="yInput1" type="text" className="calculator-input" />
			</div>

			<div className="mt-5 md:ml-10 flex flex-col">
				<CalculateButton
					id="output1"
					inputs={['xInput1', 'yInput1']}
					functionName="FractionToPercentage"
				/>
			</div>
		</div>
	);
};

export default RenderBigScreen;
