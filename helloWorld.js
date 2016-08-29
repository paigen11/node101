console.log("Hello world");

var dcClass = [
	'Paige',
	'Eric',
	'JT',
	'Dave',
	'Danny',
	'Jackson',
	'Summer',
	'Shirlette',
	'Danielle',
	'Alex',
	'Dan',
	'Brett',
	'Keith'
];

console.log(dcClass[3]); //Dave
console.log(dcClass[dcClass.length -1]); //Keith

dcClass.push('Rob');
console.log(dcClass); //whole class list plus Rob at the end

// alert('Hello World'); //the server throws an error because 'alert' is not defined there - only by the window
