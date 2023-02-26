import { Helpers } from 'utils/helpers';
import { Tool } from 'utils/tools';
import { Link } from 'react-router-dom';

type propsType = {
	tool: Tool;
	linkPath: string;
};

const SquareToolCard = (props: propsType) => {
	return (
		<Link to={props.linkPath}>
			<div
				className={`border-1 text-center m-2 p-5 rounded-lg shadow-md flex flex-col items-center square-card-hover justify-center h-48 w-48 ${Helpers.stripAllSpaces(
					props.tool.category
				)}`}
			>
				<img
					src={'/icons/' + props.tool.iconName + '.png'}
					alt={props.tool.title}
					className="w-10 pb-4"
				/>
				<p className="text-2xl">{props.tool.title}</p>
				<p className="text-gray-500">{props.tool.category}</p>
			</div>
		</Link>
	);
};

export default SquareToolCard;
