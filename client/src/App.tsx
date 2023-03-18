import Home from './pages/Home/index';
import './output.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToolsLoader from './pages/Tools/ToolsLoader';
import UniversityFinderIndex from 'pages/UniversityFinder/UniversityFinderIndex';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tools/:toolid" element={<ToolsLoader />} />
				<Route path="/university-finder" element={<UniversityFinderIndex />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
