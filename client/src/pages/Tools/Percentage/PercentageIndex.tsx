import SuggestedTools from 'shared/SuggestedTools';
import PercentageRender from './PercentageRender';

const PercentageIndex = () => {
	return (
		<div className="md:mt-10 responsive-spacing">
			<h1 className="text-xl font-semibold md:text-3xl">
				Percentage Calculators
			</h1>

			<PercentageRender />

			<SuggestedTools />
		</div>
	);
};

export default PercentageIndex;
