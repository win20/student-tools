import { useParams } from 'react-router-dom';
import { Tool } from '../../../utils/tools';
import { Helpers } from '../../../utils/helpers';
import SuggestedTools from '../../../shared/SuggestedTools';
import CalculateButton from '../../../shared/CalculateButton';

const QuadraticFormula = () => {
	const { toolid } = useParams();

	const toolsToSuggest: Tool[] = Helpers.getToolsToSuggest(toolid!);

	return (
		<div className="md:mt-10 responsive-spacing">
			<h1 className="text-xl font-semibold md:text-3xl">Quadratic Formula</h1>
			<p>{toolid}</p>

			<SuggestedTools toolsArray={toolsToSuggest} />
		</div>
	);
};

export default QuadraticFormula;
