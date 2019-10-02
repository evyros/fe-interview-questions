/*
	The function "run()" is not available when the page loads.
	However, it will become available at some point.
	Run the "run()" when it's available.
*/

const ms = Math.random() * 3000;
setTimeout(() => {
	window.run = function() {
		console.log('run is available');
	};
}, ms);
