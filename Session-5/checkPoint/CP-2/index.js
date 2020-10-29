const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        price: 20000,
        brand: 'Asus',
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        price: 14000,
        brand: 'HP',
        quantity: 7,
    },
];
console.log(inventory);

const inventoryByBrand = {
    'HP': [],
    'Asus': [],
    'Dell': [],

};

for(let i=0; i<inventory.length; i++)
{
    const inven = inventory[i];

    const brand = inven.brand;

    inventoryByBrand[brand].push(inven);

};
console.log(inventoryByBrand);

b = prompt('Which brand?');
if (b == 'dell')
{
    for (let i=0; i < inventoryByBrand['Dell'].length; i++)
    {
        let value = 30000 + 9300 * 12 + 8600 * 2;
        if (i=Math.max(inventoryByBrand['Dell'].length))
        {
        alert(`there are ${i} generation of 'Dell' in inventory
 Dell XPS 9370 \n Dell Inspiron 3567 \n Dell Latitude E5450
 total value: ${value}` );
        }; break;
    }
}
else if (b == 'asus')
{
    for (let i=0; i < inventoryByBrand['Asus'].length; i++)
    {
        if (i=Math.max(inventoryByBrand['Asus'].length))
        {
        alert(`there are ${i} generation of 'Asus' in inventory
Asus Zenbook`);
        }; break;
    }
}
else if (b == 'hp')
{
    for (let i=0; i < inventoryByBrand['HP'].length; i++)
    {
        if (i=Math.max(inventoryByBrand['HP'].length))
        {
        alert(`there are ${i} generation of 'HP' in inventory
HP Envy 13aq \n HP Pavilion`);
        }; break;
    }
}
else alert('please, enter the existing brand');
    




