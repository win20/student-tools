import { Link } from 'react-router-dom';
import { toolsArray } from '../../utils/tools';
import { Tool } from '../../utils/tools';
import SquareToolCard from 'shared/SquareToolCard';

const ToolCardSquare = ({ searchQuery }: { searchQuery: string }) => {
	const filterTools = (tool: Tool): boolean => {
		return tool.title.toLocaleLowerCase().includes(searchQuery.toLowerCase());
	};

	const filteredTools: Tool[] = toolsArray.filter(filterTools);

	const renderTools: JSX.Element[] = filteredTools.map(
		(tool: Tool, i: number) => (
			<div key={i}>
				<Link to={`/tools/${i}`}>
					<SquareToolCard tool={tool} />
				</Link>
			</div>
		)
	);

	return (
		<div className="hidden desktop:flex flex-wrap justify-center">
			{renderTools}
		</div>
	);
};

export default ToolCardSquare;
