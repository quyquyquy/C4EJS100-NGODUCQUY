let products ={
    name: ['Xiaomi portable charger 20000 mah','VSmart Active 1','IPhone X','Samsung Galaxy A9'],
    price: [428,5487,21490,8490],
    brand: ['Xiaomi','VSmart','Apple','Samsung'],
    color: ['White','Black','Gray','Blue'],
    category: ['Charger','Phone','Phone','Phone'],
}
let {name,price,brand,color,category} = products;

console.log('1.');
for(let i=0; i<products.name.length; i++)
{
    console.log('-------------------');
    console.log(`Name: ${name[i]}`);
    console.log(`Price: ${price[i]}`);
}
console.log('\n');

console.log('2.');
for(let i=0; i<products.name.length; i++)
{
    console.log('-------------------');
    console.log(`#${i+1} Name: ${name[i]}`);
    console.log(`   Price: ${price[i]}`);
}
console.log('\n');
console.log('3.');
let n = prompt('Enter the product position');
if (n==1)
{
    console.log(`Name: ${name[0]}`);
    console.log(`Price: ${price[0]}`);
    console.log(`Brand: ${brand[0]}`);
    console.log(`Color: ${color[0]}`);
    console.log(`Category: ${category[0]}`);
}
else if (n==2)
{
    console.log(`Name: ${name[1]}`);
    console.log(`Price: ${price[1]}`);
    console.log(`Brand: ${brand[1]}`);
    console.log(`Color: ${color[1]}`);
    console.log(`Category: ${category[1]}`);  
}
else if (n==3)
{
    console.log(`Name: ${name[2]}`);
    console.log(`Price: ${price[2]}`);
    console.log(`Brand: ${brand[2]}`);
    console.log(`Color: ${color[2]}`);
    console.log(`Category: ${category[2]}`);  
}
else if (n==4)
{
    console.log(`Name: ${name[3]}`);
    console.log(`Price: ${price[3]}`);
    console.log(`Brand: ${brand[3]}`);
    console.log(`Color: ${color[3]}`);
    console.log(`Category: ${category[3]}`);  
}
else alert('Please enter from 1 to 4');

console.log('\n');
{
console.log('4.');

let n = prompt('Enter the category');
if (n=='charger')
{
     console.log(`Name: ${name[0]}`);
     console.log(`Price: ${price[0]}`);
}
else if (n=='phone')
{
    for (let i=1; i<products.name.length; i++)
    {
    console.log(`Name: ${name[i]}`);
    console.log(`Price: ${price[i]}`);
    }
}
else alert('We just have charger and phone')
}
console.log('\n');
{
console.log('5.');
let providers = [];
providers.push(providers = ['Phukienzero Dientuccc','Ddghn VhStore Tgdd', 'Tgdd', 'Tgdd']);
for(let i=0; i<products.name.length; i++)
{
    console.log('-------------------');
    console.log(`#${i+1} Name: ${name[i]}`);
    console.log(`   Price: ${price[i]}`);
    console.log(`   Provides: ${providers[i]}`);
}
}
console.log('\n');
