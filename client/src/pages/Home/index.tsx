import NavBar from '../../shared/NavBar';
import SearchBar from './SearchBar';
import FilterPill from './FilterPill';
import ToolCardRec from './ToolCardRec';
import ToolCardSquare from './ToolCardSquare';
import { toolsArray } from '../../utils/tools';
import { createContext, useState } from 'react';
import UserProvider from './ToolsContext';

export const ToolsDisplayedContext = createContext(toolsArray);

const Home = () => {
	const [tools, setTools] = useState(toolsArray);

	return (
		<div id="Home">
			<NavBar />
			<div id="homeContent" className="p-5 md:p-10 lg:px-96">
				<h2 className="text-3xl font-semibold mb-5">
					Calculators and Formulas
				</h2>

				<UserProvider>
					<div className="md:flex justify-between mb-2">
						<ToolsDisplayedContext.Provider value={tools}>
							<SearchBar toolsArray={toolsArray} />
						</ToolsDisplayedContext.Provider>
						<FilterPill />
					</div>
					<ToolsDisplayedContext.Provider value={tools}>
						<ToolCardRec />
						<ToolCardSquare />
					</ToolsDisplayedContext.Provider>
				</UserProvider>
			</div>
		</div>
	);
};

export default Home;
