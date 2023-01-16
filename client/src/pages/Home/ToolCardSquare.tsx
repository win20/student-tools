import { toolsArray } from '../../utils/tools';
import { Helpers } from '../../utils/helpers';

const ToolCardSquare = () => {
	const renderTools = toolsArray.map((tool: any, i: any) => (
		<div key={i}>
			<div
				className={`border-1 text-center m-2 p-5 rounded-lg shadow-md flex flex-col items-center square-card-hover justify-center h-48 w-48 ${Helpers.stripAllSpaces(
					tool.category
				)}`}
			>
				<img
					src={require('../../../public/icons/' + tool.iconName + '.png')}
					alt={tool.title}
					className="w-10 pb-4"
				/>
				<p className="text-2xl">{tool.title}</p>
				<p className="text-gray-500">{tool.category}</p>
			</div>
		</div>
	));

	renderTools.forEach((tool: any) => {});

	return (
		// <div className="hidden lg:grid grid-flow-row grid-cols-4">
		// 	{renderTools}
		// </div>

		<div className="hidden lg:flex flex-wrap">{renderTools}</div>
	);
};

export default ToolCardSquare;
