import _ from "lodash";

let BillTrows = [];
let AndrewTrows = [];

function throwCube(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

BillTrows [0] = throwCube(1,6);
console.log('With first throw Bill get - ' + BillTrows[0]);
AndrewTrows [0] = throwCube(1,6);
console.log('With first throw Andrew get - ' + AndrewTrows[0]);
BillTrows [1] = throwCube(1,6);
console.log('With second throw Bill get - ' + BillTrows[1]);
AndrewTrows [1] = throwCube(1,6);
console.log('With first throw Andrew get - ' + AndrewTrows[1]);
BillTrows [2] = throwCube(1,6);
console.log('With third throw Bill get - ' + BillTrows[2]);
AndrewTrows [2] = throwCube(1,6);
console.log('With first throw Andrew get - ' + AndrewTrows[2]);

let billSumOfThrows = _.sum(BillTrows);
console.log('The sum of Bills throws is '+ billSumOfThrows);

let andrewSumOfThrows = _.sum(AndrewTrows);
console.log('The sum of Andrews throws is '+ andrewSumOfThrows);

function calculateTheWinnerAmount(andrewAmount, billAmount){
    if (andrewAmount === billAmount){
        console.log("We have the draw!")
    } if (andrewAmount>billAmount) {
        console.log('Andrew is the winner!')
    } if (billAmount > andrewAmount){
        console.log('Bill is the winner!')
    }
}

calculateTheWinnerAmount(andrewSumOfThrows, billSumOfThrows);


