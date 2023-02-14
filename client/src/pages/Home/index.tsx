import Header from '../../shared/Header';
import SearchBar from './SearchBar';
import FilterPill from './FilterPill';
import ToolCardRec from './ToolCardRec';
import SquareToolCards from './SquareToolCards';
import { useState } from 'react';
import { toolsArray } from 'utils/tools';

const Home = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');

	return (
		<div id="Home">
			<Header />
			<div id="homeContent" className="p-5 md:p-10 desktop:px-96">
				<h2 className="text-2xl font-semibold mb-5 desktop:text-3xl">
					Calculators and Formulas
				</h2>

				<div className="md:flex justify-between mb-2">
					<SearchBar setSearchQuery={setSearchQuery} />
					<FilterPill />
				</div>

				<ToolCardRec searchQuery={searchQuery} />
				<SquareToolCards searchQuery={searchQuery} toolsArray={toolsArray} />
			</div>
		</div>
	);
};

export default Home;
