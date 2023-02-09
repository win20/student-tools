import Percentage from 'pages/Tools/Percentage/Percentage';
import Quadratic from 'pages/Tools/QuadraticFormula/QuadraticFormula';
import { toolsArray, Tool } from './tools';
import { Helpers } from './helpers';

const setToolTitles = (): string[] => {
	const titles: string[] = [];
	toolsArray.forEach((tool: Tool) => {
		titles.push(Helpers.urlCleaner(tool.title));
	});

	return titles;
};

const urlSuffixes: string[] = setToolTitles();

interface AssociativeArray {
	[key: string]: JSX.Element;
}

const toolPages: AssociativeArray = {
	[urlSuffixes[0]]: <Percentage />,
	[urlSuffixes[1]]: <Quadratic />,
};

export default toolPages;
