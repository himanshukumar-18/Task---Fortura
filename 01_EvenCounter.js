const arr = [10, 13, 15, 20, 25, 30, 35, 40];

let evenCount = arr.filter(nums => nums % 2 === 0).length;
console.log(`Number of even numbers: ${evenCount}`);