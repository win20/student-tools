import { Helpers } from '../../utils/helpers';
import { Tool } from '../../utils/tools';
import RectangleToolCard from 'shared/RectangleToolCard';

type propsType = {
	searchQuery: string;
	toolsArray: Tool[];
};

const RectangleToolCards = (props: propsType) => {
	const filterTools = (tool: Tool) => {
		return tool.title
			.toLocaleLowerCase()
			.includes(props.searchQuery.toLowerCase());
	};

	const filteredTools: Tool[] = props.toolsArray.filter(filterTools);

	const renderTools: JSX.Element[] = filteredTools.map((tool: Tool) => (
		<RectangleToolCard
			key={Helpers.stripAllSpaces(tool.title)}
			tool={tool}
			linkPath={`/tools/${Helpers.urlCleaner(tool.title)}`}
		/>
	));

	return (
		<div
			id="ToolCard"
			className="border-1 border-gray-100 rounded-md md:border-none desktop:hidden"
		>
			<div id="toolCardInner" className="p-3 md:p-0">
				{renderTools}
			</div>
		</div>
	);
};

export default RectangleToolCards;
