import Header from '../../shared/Header';
import SearchBar from './SearchBar';
import FilterPill from './FilterPill';
import ToolCardRec from './RectangleToolCards';
import SquareToolCards from './SquareToolCards';
import { useState } from 'react';
import { toolsArray } from 'utils/tools';
import { filters } from 'utils/filters';

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
					<FilterPill filters={filters} />
				</div>

				<ToolCardRec searchQuery={searchQuery} toolsArray={toolsArray} />
				<SquareToolCards searchQuery={searchQuery} toolsArray={toolsArray} />
			</div>
		</div>
	);
};

export default Home;
