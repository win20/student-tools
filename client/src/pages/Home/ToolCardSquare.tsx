import { toolsArray } from '../../utils/tools';

const ToolCardSquare = () => {
	const renderTools = toolsArray.map((tool: any) => (
		<div className="border-1 text-center m-2 p-5 rounded-lg shadow-md flex flex-col items-center square-card-hover">
			<img
				src={require('../../../public/icons/' + tool.iconName + '.png')}
				alt={tool.title}
				className="w-10 pb-4"
			/>
			<p>{tool.title}</p>
			<p>{tool.description}</p>
			<p>{tool.category}</p>
		</div>
	));

	return (
		<div className="hidden lg:grid grid-flow-row grid-cols-4 gap-2">
			{renderTools}
		</div>
	);
};

export default ToolCardSquare;
