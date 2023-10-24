function checkSum(str) {
    const sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    const sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
    return sum1 === sum2 ? 'да' : 'нет';
}

console.log(checkSum('111201'));

function divideUntilLessThan50(n) {
    let num = 0;
    while (n >= 50) {
        n = n / 2;
        num++;
    }
    return { result: n, iterations: num };
}
const n = 1000;
const result = divideUntilLessThan50(n);
console.log(`Число после деления:` + result.result);
console.log(`Количество итераций:` + result.iterations);

function findAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}
const arr = [12, 15, 20, 25, 59, 79];
const average = findAverage(arr);
console.log(`Среднее арифметическое: ` + average);

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
const arr2 = [3, 4, 1, 2, 7, 30, 50];
const sortedArr = sortArray(arr2);
console.log(sortedArr);