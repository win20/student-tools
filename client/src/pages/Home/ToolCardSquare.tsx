import { Link } from 'react-router-dom';
import { Helpers } from '../../utils/helpers';
import { toolsArray } from '../../utils/tools';
import { Tool } from '../../utils/tools';

const ToolCardSquare = ({ searchQuery }: { searchQuery: string }) => {
	const filterTools = (tool: Tool): boolean => {
		return tool.title.toLocaleLowerCase().includes(searchQuery.toLowerCase());
	};

	const filteredTools: Tool[] = toolsArray.filter(filterTools);

	const renderTools: JSX.Element[] = filteredTools.map(
		(tool: Tool, i: number) => (
			<div key={i}>
				<Link to={`/tools/${i}`}>
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
				</Link>
			</div>
		)
	);

	return <div className="hidden lg:flex flex-wrap">{renderTools}</div>;
};

export default ToolCardSquare;
