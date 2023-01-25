class Tool {
	title: string;
	description: string;
	category: string;
	iconName: string;

	constructor(
		title: string,
		description: string,
		category: string,
		iconName: string
	) {
		this.title = title;
		this.description = description;
		this.category = category;
		this.iconName = iconName;
	}
}

const categories: string[] = ['Maths', 'Physics', 'Life and Finance', 'Health'];

//prettier-ignore
const toolsArray: Array<Tool> = [
	new Tool('Percentage', 'description1', categories[0], 'percentage', ),
	new Tool('Quadratic Formula', 'description2', categories[0], 'function'),
	new Tool('Fraction to percentage', 'description1', categories[0], 'fraction'),
	new Tool('Area of a circle', 'description2', categories[0], 'circle'),
	new Tool('Density', 'description1', categories[1], 'density'),
	new Tool('Velocity', 'description2', categories[1], 'velocity'),
	new Tool('Force', 'description1', categories[1], 'force'),
	new Tool('Momentum', 'description2', categories[1], 'momentum'),
	new Tool('Fuel Cost', 'description1', categories[2], 'fuel'),
	new Tool('Miles per gallon', 'description2', categories[2], 'gallon'),
	new Tool('Electricity Cost', 'description1', categories[2], 'electricity'),
	new Tool('Body mass index', 'description2', categories[3], 'bmi'),
	new Tool('Lean vody mass', 'description1', categories[3], 'leanbodymass'),
	new Tool('Total daily energy expenditure', 'description2', categories[3], 'calories'),
	new Tool('Calories burned', 'description1', categories[3], 'caloriesburned'),
];

export { toolsArray, Tool };
