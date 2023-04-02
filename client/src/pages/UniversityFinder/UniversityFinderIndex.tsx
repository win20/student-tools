import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import Header from 'shared/Header';
import {
	getNunberOfEligibleUniversities,
	sortUniversities,
	SortDirections,
	SortByOptions,
} from './elgibleUniversitiesController';
import UniversityCard from './UniversityCard';
import UniversityModel from 'models/UniversityModel';
import UniversitySorting from './UniversitySorting';
import AmountToDisplayDropdown from './AmountToDisplayDropdown';

const UniversityFinderIndex = () => {
	const [universitiesToDisplay, setUniversitiesToDisplay] = useState<
		Array<UniversityModel>
	>([]);
	const [isDefaultUni, setIsDefaultUni] = useState<boolean>(true);
	const [numberOfUniversities, setNumberOfUniversities] = useState<number>(0);

	function useForceUpdate() {
		const [value, setValue] = useState(0);
		return () => setValue((value) => value + 1);
	}
	const getDefaultUniversitiesOnLoad = async () => {
		const response = await axios.get(
			import.meta.env.VITE_API_ENDPOINT + 'getDefaultUniversities'
		);
		setUniversitiesToDisplay(response.data);
	};

	useEffect(() => {
		getDefaultUniversitiesOnLoad();
	}, []);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const target = e.target as typeof e.target & {
			ucasPoints: { value: string };
		};

		const ucasTariff = target.ucasPoints.value;

		const response = await axios.get(
			import.meta.env.VITE_API_ENDPOINT + 'getUniversitiesByUcasTariff',
			{
				params: { ucasTariff },
			}
		);
		setUniversitiesToDisplay(getNunberOfEligibleUniversities(response.data, 5));
		setNumberOfUniversities(response.data.length);
		setIsDefaultUni(false);
	};

	const displayUniversities = universitiesToDisplay.map(
		(item: UniversityModel) => {
			return (
				<UniversityCard university={item} key={item['Institution']['S']} />
			);
		}
	);

	const forceUpdate = useForceUpdate();

	const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedSortOption: string = e.target.value;
		let sortBy: SortByOptions = '';
		let sortDirection: SortDirections = '';
		if (selectedSortOption === 'tariffHighToLow') {
			sortBy = 'ucas';
			sortDirection = 'descending';
		} else if (selectedSortOption === 'tariffLowToHigh') {
			sortBy = 'ucas';
			sortDirection = 'ascending';
		} else if (selectedSortOption === 'rankHighToLow') {
			sortBy = 'rank';
			sortDirection = 'descending';
		} else {
			sortBy = 'rank';
			sortDirection = 'ascending';
		}

		const sortedUniversities = sortUniversities(
			universitiesToDisplay,
			sortBy,
			sortDirection
		);

		setUniversitiesToDisplay(sortedUniversities);

		forceUpdate();
	};

	const handleAmountToDisplay = async (e: ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value);
		const ucasTariff = document.querySelector('input')?.value;

		const amountToDisplay = parseInt(e.target.value);

		const response = await axios.get(
			import.meta.env.VITE_API_ENDPOINT + 'getUniversitiesByUcasTariff',
			{
				params: { ucasTariff },
			}
		);
		setUniversitiesToDisplay(
			getNunberOfEligibleUniversities(response.data, amountToDisplay)
		);
	};
	return (
		<>
			<Header />
			<div className="md:mt-10 responsive-spacing">
				<h1 className="text-xl font-semibold md:text-3xl">University Finder</h1>

				<form action="post" className="mt-4" onSubmit={handleSubmit}>
					<label htmlFor="ucas-points" className="text-sm desktop:text-base">
						Predicted UCAS tariff points
						<input
							name="ucasPoints"
							type="text"
							className="border-1 rounded-md py-1 px-2 desktop:ml-2"
						/>
					</label>
					<button
						className="bg-secondary text-white font-semibold py-1 px-4 rounded-full mt-1 ml-4"
						type="submit"
					>
						Search
					</button>
				</form>

				<div className="mt-10">
					{isDefaultUni ? (
						<>
							<h2 className="text-xl mb-2 font-semibold">
								Suggested Universities
							</h2>
							<div>{displayUniversities}</div>
						</>
					) : (
						<>
							<div className="flex items-baseline">
								<UniversitySorting
									handleSort={(e) => {
										handleSort(e);
									}}
								/>
								<AmountToDisplayDropdown
									handleAmountToDisplay={(e) => {
										handleAmountToDisplay(e);
									}}
								/>
								<span className="ml-2">
									{numberOfUniversities} universities found
								</span>
							</div>
							{displayUniversities}
						</>
					)}
				</div>
			</div>
		</>
	);
};
export default UniversityFinderIndex;
