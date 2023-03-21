import UniversityModel from 'models/UniversityModel';

type propsType = {
	university: UniversityModel;
};

const UniversityCard = (props: propsType) => {
	return (
		<div className="border-1 border-gray-100 flex items-center justify-between p-3 text-sm rounded-md shadow-sm mb-2">
			<div>
				<div className="text-base font-bold mb-2">
					{props.university['Institution']['S']}
				</div>
				<div>Rank - {props.university['2023']['S']}</div>
				<div>
					Average entry tariff - {props.university['Average entry tariff']['S']}
				</div>
			</div>
			<div>
				<a
					href={props.university['website']['S']}
					target="_blank"
					rel="noreferrer"
					className="tablet:flex"
				>
					<span className="hidden tablet:block mr-2">Go to website</span>
					<img src="/icons/right-arrow.png" alt="right arrow" className="w-5" />
				</a>
			</div>
		</div>
	);
};

export default UniversityCard;
