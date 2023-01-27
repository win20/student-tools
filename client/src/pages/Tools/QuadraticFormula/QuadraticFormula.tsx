import { useParams } from 'react-router-dom';

const QuadraticFormula = () => {
	const { toolid } = useParams();

	return (
		<div>
			<p>Quadratic Formula</p>
			<p>{toolid}</p>
		</div>
	);
};

export default QuadraticFormula;
