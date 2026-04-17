const marks = [70, 80, 90, 60, 85];
let sum = 0;

for (let mark of marks) {
    sum += mark;
}

let average = sum / marks.length;

console.log("Average:", average);