import { Link } from 'react-router-dom';
import { Tool } from '../../utils/tools';
import SquareToolCard from 'shared/SquareToolCard';
import { Helpers } from 'utils/helpers';

type propsType = {
	searchQuery: string;
	toolsArray: Tool[];
};

const SquareToolCards = (props: propsType) => {
	const filterTools = (tool: Tool): boolean => {
		return tool.title
			.toLocaleLowerCase()
			.includes(props.searchQuery.toLowerCase());
	};

	const filteredTools: Tool[] = props.toolsArray.filter(filterTools);

	const renderTools: JSX.Element[] = filteredTools.map(
		(tool: Tool, i: number) => (
			<div key={i} data-testid="square-tool-cards">
				<Link to={`/tools/${Helpers.urlCleaner(tool.title)}`}>
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

export default SquareToolCards;
