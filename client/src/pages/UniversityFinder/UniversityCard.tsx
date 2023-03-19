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
				<img src="/icons/right-arrow.png" alt="right arrow" className="w-5" />
			</div>
		</div>
	);
};

export default UniversityCard;
