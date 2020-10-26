const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
};

for (let x in product) {
    console.log(x);
}

console.log('1.');
console.log('x is the property');

console.log('2.');

for (let i=0; i<1; i++)
{
    console.log(`name: ${product.name}`);
    console.log(`price: ${product.price}`);
    console.log(`brand: ${product.brand}`);
    console.log(`color: ${product.color}`);
}