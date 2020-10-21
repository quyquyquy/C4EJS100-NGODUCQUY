let n = prompt('Enter name');
let name = n.split(',');
let newName = [];
for (let i = 0; i<name.length; i++)
{
    newName.push(`< ${name[i]} >`);
}
alert( `${name} => ${newName}`);