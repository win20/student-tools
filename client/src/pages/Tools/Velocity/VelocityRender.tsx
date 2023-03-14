import CalculateButton from 'shared/CalculateButton';

const VelocityRender = () => {
	return (
		<div id="large-screen-percentage" className="mt-4">
			<i className="text-lg">v = u + at</i>

			<div className="flex flex-col mt-2 md:flex-row">
				<input
					id="input1"
					type="text"
					className="calculator-input mb-2"
					placeholder="u"
				/>
				<input
					id="input2"
					type="text"
					className="calculator-input mb-5"
					placeholder="a"
				/>
				<input
					id="input3"
					type="text"
					className="calculator-input mb-5"
					placeholder="t"
				/>
				<CalculateButton
					id="output1"
					inputs={['input1', 'input2', 'input3']}
					functionName="Velocity"
				/>
			</div>
		</div>
	);
};

export default VelocityRender;
