/*
	Each object represents a license the customer bought.
	Write a function named "hasActiveLicense()" that receives a date and checks whether
	there is at least 1 active license on that date or not.
*/

let licenses = [
	{
		start: new Date('December 17, 2017 03:24:00'),
		end: new Date('December 24, 2017 03:24:00')
	},
	{
		start: new Date('December 19, 2017 04:00:00'),
		end: new Date('December 28, 2017 04:00:00')
	},
	{
		start: new Date('November 14, 2017 00:00:00'),
		end: new Date('November 21, 2017 00:00:00')
	},
	{
		start: new Date('December 20, 2017 00:00:00'),
		end: new Date('January 1, 2018 00:00:00')
	},
	{
		start: new Date('October 4, 2017 00:00:00'),
		end: new Date('October 9, 2017 00:00:00')
	}
];

const dateToCheck = new Date('December 29, 2017 04:00:00');
