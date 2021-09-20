const nums = [6, 5, 2, 3, 4, 1, 0];
console.log("orig array " +nums)
// remove each of the last two items with pop(), saving each item to a variable
let num1 = nums.pop();
let num2 = nums.pop();
console.log("after pop "+ nums);
// remove each of the first two items with shift(), saving each item to a variable
let num3 = nums.shift();
let num4 = nums.shift();
console.log('after shift= '+ nums);

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(num2);
nums.push(num1);
nums.unshift(num4);
nums.unshift(num3);
console.log('after push and unshift of affected values ' + nums);