let a = prompt('Enter number:');
let n = a.split(',').map(n=>+n);
let odd = [];
for (let i=0; i<n.length; i++) 
{
    if (n[i] % 2 == 1) 
    {
        odd.push(n[i]);
    }
}
alert(`${n} => ${odd}`);