import { useParams } from 'react-router-dom';
import { Tool } from '../../../utils/tools';
import { Helpers } from '../../../utils/helpers';
import SuggestedTools from '../../../shared/SuggestedTools';
import QuadraticFormulaRender from './QuadraticFormulaRender';

const QuadraticFormulaIndex = () => {
	const { toolid } = useParams();

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const toolsToSuggest: Tool[] = Helpers.getToolsToSuggest(toolid!);

	return (
		<div className="md:mt-10 responsive-spacing">
			<h1 className="text-xl font-semibold md:text-3xl">Quadratic Formula</h1>
			<p className="text-xl mt-2">
				Formula:{' '}
				<i>
					ax<sup>2</sup> + bx + c = 0
				</i>
			</p>

			<QuadraticFormulaRender />

			<SuggestedTools toolsArray={toolsToSuggest} />
		</div>
	);
};

export default QuadraticFormulaIndex;
