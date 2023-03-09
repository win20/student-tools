import PercentageIndex from 'pages/Tools/Percentage/PercentageIndex';
import FractionToPercentageIndex from 'pages/Tools/FractionToPercentage/FractionToPercentageIndex';
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
	[urlSuffixes[0]]: <PercentageIndex />,
	[urlSuffixes[1]]: <FractionToPercentageIndex />,
};

export default toolPages;
