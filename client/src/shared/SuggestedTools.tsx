import { Tool } from 'utils/tools';
import SquareToolCard from './SquareToolCard';
import { Helpers } from 'utils/helpers';
import { useEffect, useState } from 'react';
import RectangleToolCard from './RectangleToolCard';
import { useParams } from 'react-router-dom';
import { toolsArray } from 'utils/tools';

const SuggestedTools = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { toolid } = useParams();
	const toolUri = toolid ? toolid : '';

	const toolsToSuggest: Tool[] = Helpers.getToolsToSuggest(toolUri);

	useEffect(() => {
		Helpers.windowResizeListener(setWindowWidth);
	});

	if (toolsToSuggest.length < 5) {
		const randomList: number[] = [];

		while (toolsToSuggest.length < 4) {
			const r = Math.floor(Math.random() * toolsArray.length);

			if (!randomList.includes(r)) {
				randomList.push(r);
			}

			if (
				Helpers.urlCleaner(toolsArray[r].title) !== Helpers.urlCleaner(toolUri)
			) {
				toolsToSuggest.push(toolsArray[r]);
			}
		}
	}

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
