const n = [1,2,5,6,7,8,11];
let a = prompt('Enter the number you want to find');
let find = false;
let index;
for(let i=0; i<n.length;i++)
{
    if(a==n[i])
    {
        index=i;
        find= true;
        break;
    }
}
if (find=true)
{
    alert(`${a} is found in my array at index ${index}`);
}
else alert(`${a} is not found in my index`);





