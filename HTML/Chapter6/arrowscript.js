// Arrow functions in JavaScript are pretty cool!
//
// The provide a way to write simple functions "inline"

let findSum = (a,b) => a + b;

sum = findSum(12,14);
console.log(sum);

stringSum = findSum("Bob ","Smith");
console.log(stringSum)

let square = x => x*x;

console.log(square(5));
