import { useParams } from 'react-router-dom';
import PercentageIndex from './Percentage/PercentageIndex';
import QuadraticFormulaIndex from './QuadraticFormula/QuadraticFormulaindex';
import Header from 'shared/Header';

const ToolsLoader = () => {
	const { toolid } = useParams();

	const views = [<PercentageIndex />, <QuadraticFormulaIndex />];

	return (
		<div>
			<Header />
			{toolid && views[parseInt(toolid)]}
		</div>
	);
};

export default ToolsLoader;
