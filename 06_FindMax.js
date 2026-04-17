const arr = [10, 45, 23, 67, 12];
let max = arr[0];

for (let num of arr) {
    if (num > max) {
        max = num;
    }
}

console.log("Max:", max);