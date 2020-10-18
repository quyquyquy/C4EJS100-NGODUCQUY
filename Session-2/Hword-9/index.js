{
console.log("a,");
let L=0, H=0;
for (i=1; i<=6; i++)
{
    if (i<=3)
    {
        L++;
    }
    else
    {
        H++;
    }
}
console.log(`${L} L`);
console.log(`${H} H`);
}

{
console.log("b,");
let L=0, H=0;
let n = Number(prompt("Enter the total number L's and H's"));
for (i=1; i<=n; i++)
{
    if (i<=(n/2))
    {
        L++;
    }
    else
    {
        H++;
    }
}
console.log(`${L} L`);
console.log(`${H} H`);
}

{
console.log("c,");
for (let i=1;i<=4;i++)
    {
        console.log("0");
        console.log("1");
    }

}

{
console.log("d,")
let n = prompt("Enter n");
for (let i=1; i<=n; i++)
{
    console.log("0");
    console.log("1");
}

}

