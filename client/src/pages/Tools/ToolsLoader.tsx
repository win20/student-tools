import { useParams } from 'react-router-dom';
import Header from 'shared/Header';
import toolPages from 'utils/toolPages';

const ToolsLoader = () => {
	const { toolid } = useParams();

	return (
		<div>
			<Header />
			{toolid && toolPages[toolid]}
		</div>
	);
};

export default ToolsLoader;
