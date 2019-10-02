/*
	1. Why does this code output only the number 5?
	2. Suggest two possible solutions
*/

for(var i=0; i<5; i++) {
	setTimeout(() => {
		alert(i);
	}, 10);
}