import { Helpers } from 'utils/helpers';
import SuggestedTools from 'shared/SuggestedTools';
import { Tool } from 'utils/tools';
import { useParams } from 'react-router-dom';
import PercentageRender from './PercentageRender';

const PercentageIndex = () => {
	const { toolid } = useParams();

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const toolsToSuggest: Tool[] = Helpers.getToolsToSuggest(toolid!);

	return (
		<div className="md:mt-10 responsive-spacing">
			<h1 className="text-xl font-semibold md:text-3xl">
				Percentage Calculators
			</h1>

			<PercentageRender />

			<SuggestedTools toolsArray={toolsToSuggest} />
		</div>
	);
};

export default PercentageIndex;
