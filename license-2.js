/*
	Each object represents a license start or end.
	Write a function that receives a date and checks if
	there is at least 1 active license on that date or not.
*/

let licenses = [
	{
		type: 'start',
		date: new Date('December 17, 2017 03:24:00')
	},
	{
		type: 'start',
		date: new Date('November 10, 2017 00:00:00')
	},
	{
		type: 'end',
		date: new Date('December 24, 2017 03:24:00')
	},
	{
		type: 'start',
		date: new Date('December 19, 2017 04:00:00')
	},
	{
		type: 'end',
		date: new Date('December 28, 2017 04:00:00')
	},
	{
		type: 'start',
		date: new Date('December 20, 2017 00:00:00')
	},
	{
		type: 'end',
		date: new Date('October 4, 2017 00:00:00')
	},
	{
		type: 'end',
		date: new Date('October 9, 2017 00:00:00')
	}
];

const dateToCheck = new Date('December 29, 2017 04:00:00');