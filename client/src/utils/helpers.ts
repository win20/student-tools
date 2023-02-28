import { Tool, toolsArray } from './tools';
import { Dispatch, SetStateAction } from 'react';

class Helpers {
	static stripAllSpaces(input: string): string {
		return input.replace(/\s/g, '');
	}

	static animateOnEvent(
		element: HTMLElement,
		animation: string,
		timeoutInMs: number
	) {
		element.classList.add(animation);
		setTimeout(() => {
			element.classList.remove(animation);
		}, timeoutInMs);
	}

	static urlCleaner(input: string): string {
		const lowerCase = input.toLowerCase();
		return lowerCase.replace(/ /g, '-');
	}

	static getToolsToSuggest(currentPage: string): Tool[] {
		const tools: Tool[] = [];
		toolsArray.forEach((tool: Tool) => {
			const removeHyphen = currentPage.replace(/-/g, ' ');
			if (tool.title.toLowerCase().includes(removeHyphen)) {
				tools.push(tool);
			}
		});

		return tools;
	}

	static windowResizeListener(setWindowWidth: Dispatch<SetStateAction<number>>) {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}
}

export { Helpers };
