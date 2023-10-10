let a = true;
let b = 5;
let c = 'abc';
let d;

d = c + a;  //string+boolean
console.log(d);
console.log(typeof d);

d = c + b;  //string+number
console.log(d);
console.log(typeof d);

d = a + b;  //number+boolean
console.log(d);
console.log(typeof d);

d = c * a; //string * boolean
console.log(d);
console.log(typeof d);

d = c * b;  //string * number
console.log(d);
console.log(typeof d);

d = a * b;  //number * boolean
console.log(d);
console.log(typeof d);

d = b / a;  //string/boolean
console.log(d);
console.log(typeof d);

d = c / b;  //string/number
console.log(d);
console.log(typeof d);

d = c / b;  //number/Boolean
console.log(d);
console.log(typeof d);

console.log(typeof c);
c = Number(c); //string to number
console.log(typeof c);

console.log(typeof b);
let f = String(c); //number to string
console.log(typeof f);

console.log(typeof b);
let j = Boolean(c); //number to boolean
console.log(typeof j);