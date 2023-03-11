import DensityRender from './DensityRender';
import SuggestedTools from 'shared/SuggestedTools';

const DensityIndex = () => {
	return (
		<div className="md:mt-10 responsive-spacing">
			<h1 className="text-xl font-semibold md:text-3xl">Density</h1>

			<DensityRender />
			<SuggestedTools />
		</div>
	);
};

export default DensityIndex;
