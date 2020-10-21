let n = prompt('Enter a squence of numbers, sperated by ","');
let a = n.split(',').map(a => +a);
let x=0;
for (let i=0; i<a.length; i++)
{
    x =x + a[i];
}
alert(x);