let n = prompt('Enter a squence of numbers, sperated by ","');
let a = n.split(',');
let min = a[0] ;
for (let i=0; i<a.length; i++)
{
    if( min > a[i])
        {
            min = a[i];
        }
}
console.log(`the smallest number is ${min}`);