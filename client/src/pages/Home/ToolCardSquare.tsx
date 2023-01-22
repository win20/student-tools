import { Helpers } from '../../utils/helpers';
import { useContext } from 'react';
import { UserContext } from './ToolsContext';
import { toolsArray } from '../../utils/tools';
import { Tool } from '../../utils/tools';

const ToolCardSquare = (props: any) => {
	const queryContext = useContext(UserContext);

	const filterTools = (tool: Tool) => {
		return tool.title
			.toLocaleLowerCase()
			.includes(queryContext.query.toLowerCase());
	};

	const filteredTools = toolsArray.filter(filterTools);

	const renderTools = filteredTools.map((tool: Tool, i: number) => (
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

	return <div className="hidden lg:flex flex-wrap">{renderTools}</div>;
};

export default ToolCardSquare;
