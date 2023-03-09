import RenderBigScreen from './FractionToPercentageRender';
import SuggestedTools from 'shared/SuggestedTools';
import { Helpers } from 'utils/helpers';
import { useParams } from 'react-router-dom';
import { Tool } from 'utils/tools';

const FractionToPercentageIndex = () => {
	const { toolid } = useParams();

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const toolsToSuggest: Tool[] = Helpers.getToolsToSuggest(toolid!);

	return (
		<div className="md:mt-10 responsive-spacing">
			<h1 className="text-xl font-semibold md:text-3xl">
				Fraction to percentage calculator
			</h1>

			<RenderBigScreen />

			<SuggestedTools toolsArray={toolsToSuggest} />
		</div>
	);
};

export default FractionToPercentageIndex;
