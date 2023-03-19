import { FormEvent, useState } from 'react';
import axios from 'axios';
import Header from 'shared/Header';
import getNunberOfEligibleUniversities from './elgibleUniversitiesController';
import UniversityCard from './UniversityCard';
import UniversityModel from 'models/UniversityModel';

const UniversityFinderIndex = () => {
	const [universitiesToDisplay, setUniversitiesToDisplay] = useState<
		Array<UniversityModel>
	>([]);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const target = e.target as typeof e.target & {
			ucasPoints: { value: string };
		};

		const ucasTariff = target.ucasPoints.value;

		const response = await axios.get(
			'http://localhost:8080/get-elligible-universities',
			{
				params: { ucasTariff },
			}
		);

		setUniversitiesToDisplay(getNunberOfEligibleUniversities(response.data, 5));
	};

	const displayUniversities = universitiesToDisplay.map(
		(item: UniversityModel) => {
			return (
				<UniversityCard university={item} key={item['Institution']['S']} />
			);
		}
	);

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

				<div className="mt-20">{displayUniversities}</div>
			</div>
		</>
	);
};

export default UniversityFinderIndex;
