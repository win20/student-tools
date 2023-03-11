import CalculateButton from 'shared/CalculateButton';

const AreaOfACircleRender = () => {
	const Render = () => {
		return (
			<div id="large-screen-percentage" className="mt-4">
				<i className="text-lg">
					A = <span>&#960;</span> r <sup>2</sup>
				</i>

				<div className="flex mt-2">
					<input id="xInput1" type="text" className="calculator-input" />
					<CalculateButton
						id="output1"
						inputs={['xInput1']}
						functionName="AreaOfACircle"
					/>
				</div>
			</div>
		);
	};

	return <Render />;
};

export default AreaOfACircleRender;
