import { Link } from 'react-router-dom';
import { Helpers } from 'utils/helpers';
import { Tool } from 'utils/tools';

type propsType = {
	tool: Tool;
	linkPath: string;
};

const RectangleToolCard = (props: propsType) => {
	return (
		<Link to={props.linkPath}>
			<div
				className={`py-5 md:border-1 md:p-5 md:my-5 md:rounded-md md:border-opacity-50 ${Helpers.stripAllSpaces(
					props.tool.category
				)}`}
			>
				<div className="flex items-center justify-between md:relative">
					<p className="text-xl">{props.tool.title}</p>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-8 h-8 md:w-11 md:h-11 md:absolute md:right-0 md:top-1"
					>
						<path
							fillRule="evenodd"
							d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
							clipRule="evenodd"
						/>
					</svg>
				</div>

				<p className="hidden md:block">{props.tool.description}</p>
			</div>
		</Link>
	);
};

export default RectangleToolCard;
