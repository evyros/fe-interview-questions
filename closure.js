// What will the following code output? explain why.

var x = 1;
function myFunc() {
  x = 10;
  return;
  function x() {}
}
myFunc();
console.log(x);
