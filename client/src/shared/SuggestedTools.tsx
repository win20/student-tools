import { Tool } from 'utils/tools';
import { Link } from 'react-router-dom';
import SquareToolCard from './SquareToolCard';

type propsType = {
	toolsArray: Tool[];
};

const SuggestedTools = (props: propsType) => {
	const renderTools: JSX.Element[] = props.toolsArray.map(
		(tool: Tool, i: number) => (
			<div key={i}>
				<Link to={`/tools/${i}`}>
					<SquareToolCard tool={tool} />
				</Link>
			</div>
		)
	);

	return (
		<div>
			<h2 className="mt-10 text-xl font-bold">Suggested Tools</h2>
			<div className="flex">{renderTools}</div>
		</div>
	);
};

export default SuggestedTools;
