{
console.log('1.');
let a=1;
let b=2;
let x;
console.log(a, b);
 
x = a;
a = b;
b = x;
console.log(a, b);
}

{
console.log('2. ');
let a=1;
let b=2;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);
}