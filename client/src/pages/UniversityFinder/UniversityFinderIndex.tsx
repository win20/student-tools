import { FormEvent, SyntheticEvent } from 'react';
import Header from 'shared/Header';

const UniversityFinderIndex = () => {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const target = e.target as typeof e.target & {
			ucasPoints: { value: string };
		};

		const ucasTariff = target.ucasPoints.value;
	};

	return (
		<>
			<Header />
			<div className="md:mt-10 responsive-spacing">
				<h1 className="text-xl font-semibold md:text-3xl">University Finder</h1>

				<form action="post" className="mt-4" onSubmit={handleSubmit}>
					<label htmlFor="ucas-points" className="text-sm">
						Predicted UCAS tariff points
						<input
							name="ucasPoints"
							type="text"
							className="border-1 rounded-md py-1 px-2"
						/>
					</label>
					<button
						className="bg-secondary text-white font-semibold py-1 px-4 rounded-full mt-1 ml-4"
						type="submit"
					>
						Search
					</button>
				</form>
			</div>
		</>
	);
};

export default UniversityFinderIndex;
