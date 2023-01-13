import NavBar from '../../shared/NavBar';
import SearchBar from './SearchBar';
import FilterPill from './FilterPill';
import ToolCardRec from './ToolCardRec';
import ToolCardSquare from './ToolCardSquare';

const Home = () => {
	return (
		<div id="Home">
			<NavBar />
			<div id="homeContent" className="p-5 md:p-10 lg:px-96">
				<h2 className="text-3xl font-semibold mb-5">
					Calculators and Formulas
				</h2>
				<div className="md:flex justify-between mb-2">
					<SearchBar />
					<FilterPill />
				</div>

				<ToolCardRec />
				<ToolCardSquare />
			</div>
		</div>
	);
};

export default Home;
