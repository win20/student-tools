import RenderBigScreen from './FractionToPercentageRender';
import SuggestedTools from 'shared/SuggestedTools';

const FractionToPercentageIndex = () => {
	return (
		<div className="md:mt-10 responsive-spacing">
			<h1 className="text-xl font-semibold md:text-3xl">
				Fraction to percentage calculator
			</h1>

			<RenderBigScreen />

			<SuggestedTools />
		</div>
	);
};

export default FractionToPercentageIndex;
