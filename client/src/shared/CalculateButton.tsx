import getCalculationAnswer from '../pages/Tools/Controllers/CalculatorController';

type propsType = {
	id: string;
	inputs: string[];
	functionName: string;
};

const CalculateButton = (props: propsType) => {
	const handleClick = () => {
		getCalculationAnswer(props.inputs, props.functionName);
	};

	return (
		<span id="calculate-button" className="rounded-full text-lightText flex">
			<button
				id={`${props.id}-btn`}
				className="px-4 w-22 h-8 py-2 rounded-l-full bg-secondary hover:bg-secondaryHighlight md:w-24 md:h-10"
				onClick={handleClick}
			>
				<p className="text-sm md:text-base">Calculate</p>
			</button>
			<input
				id={props.id}
				type="text"
				disabled
				className="py-2 w-20 h-8 rounded-r-full bg-slate-100 text-black pl-2 md:w-24 md:h-10"
			/>
		</span>
	);
};

export default CalculateButton;
