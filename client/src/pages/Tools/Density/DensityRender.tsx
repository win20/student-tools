import CalculateButton from 'shared/CalculateButton';

const DensityRender = () => {
	return (
		<div id="large-screen-percentage" className="mt-4">
			<i className="text-lg">
				p = m <span>&frasl;</span> V
			</i>

			<div className="flex flex-col mt-2 md:flex-row">
				<input
					id="xInput1"
					type="text"
					className="calculator-input mb-2"
					placeholder="mass (m)"
				/>
				<input
					id="yInput1"
					type="text"
					className="calculator-input mb-5"
					placeholder="volume (V)"
				/>
				<CalculateButton
					id="output1"
					inputs={['xInput1', 'yInput1']}
					functionName="Density"
				/>
			</div>
		</div>
	);
};

export default DensityRender;
