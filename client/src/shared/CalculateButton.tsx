interface propsInterface {
	id: string;
	function: () => void;
}

const CalculateButton = (props: propsInterface) => {
	return (
		<span className="ml-10 rounded-full text-lightText">
			<button
				className="px-4 py-2 rounded-l-full bg-secondary hover:bg-secondaryHighlight"
				onClick={props.function}
			>
				Calculate
			</button>
			<input
				id={props.id}
				type="text"
				disabled
				className="py-2 w-24 rounded-r-full bg-slate-100 text-black pl-2"
			/>
		</span>
	);
};

export default CalculateButton;
