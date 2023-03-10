import { Tool } from 'utils/tools';
import SquareToolCard from './SquareToolCard';
import { Helpers } from 'utils/helpers';
import { useEffect, useState } from 'react';
import RectangleToolCard from './RectangleToolCard';
import { useParams } from 'react-router-dom';

const SuggestedTools = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { toolid } = useParams();
	const toolUri = toolid ? toolid : '';
	const [toolsToSuggest, setToolsToSuggest] = useState<Tool[]>([]);

	useEffect(() => {
		Helpers.windowResizeListener(setWindowWidth);
		// toolsToSuggest = Helpers.getToolsToSuggest(toolUri);
		setToolsToSuggest(Helpers.getToolsToSuggest(toolUri));
	}, []);

	const renderSquareTools: JSX.Element[] = toolsToSuggest.map(
		(tool: Tool, i: number) => (
			<div className="suggested-tool" key={i}>
				<SquareToolCard
					tool={tool}
					linkPath={`/tools/${Helpers.urlCleaner(tool.title)}`}
				/>
			</div>
		)
	);

	const renderRectangleTools: JSX.Element[] = toolsToSuggest.map(
		(tool: Tool, i: number) => (
			<div className="suggested-tool" key={i}>
				<RectangleToolCard
					tool={tool}
					linkPath={`/tools/${Helpers.urlCleaner(tool.title)}`}
				/>
			</div>
		)
	);

	return (
		<div>
			<h2 className="mt-10 text-xl font-bold">Suggested Tools</h2>
			<div className="md:flex">
				{windowWidth > 768 ? renderSquareTools : renderRectangleTools}
			</div>
		</div>
	);
};

export default SuggestedTools;
