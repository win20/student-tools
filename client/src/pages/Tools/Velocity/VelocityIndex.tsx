import VelocityRender from './VelocityRender';
import SuggestedTools from 'shared/SuggestedTools';

const VelocityIndex = () => {
	return (
		<div className="md:mt-10 responsive-spacing">
			<h1 className="text-xl font-semibold md:text-3xl">Velocity</h1>

			<VelocityRender />
			<SuggestedTools />
		</div>
	);
};

export default VelocityIndex;
