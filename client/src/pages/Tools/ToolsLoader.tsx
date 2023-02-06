import { useParams } from 'react-router-dom';
import Percentage from './Percentage/Percentage';
import Quadratic from './QuadraticFormula/QuadraticFormula';
import Header from 'shared/Header';

const ToolsLoader = () => {
	const { toolid } = useParams();

	const views = [<Percentage />, <Quadratic />];

	return (
		<div>
			<Header />
			{toolid && views[parseInt(toolid)]}
		</div>
	);
};

export default ToolsLoader;
