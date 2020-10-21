let s = ['jeans', 'T-Shirt', 'socks'];
let choices = prompt('welcome to the shop, what do you want (C,R,U,D)');
if (choices.toLowerCase()=='r')
{
    console.log('The current items are: ')
    for (let i=0; i<s.length;i++)
    {
        console.log(`${i+1}. ${s[i]}`);
    }
}
else if (choices.toLowerCase()=='c')
{
    let newItem = prompt('Enter the new item');
    s.push(newItem);
    alert('Done');
    console.log('The current items are: ');
    for (let i=0; i<s.length;i++)
    {
        console.log(`${i+1}. ${s[i]}`);
    }
}else if (choices.toLowerCase()=='u')
{
    let i = Number(prompt('Enter the position of the item'));
    let changeItem = prompt('Enter the new item name');
    s[i]=changeItem;
    alert('Done');
    console.log('The current items are: ');
    for (let i=0; i<s.length;i++)
    {
        console.log(`${i+1}. ${s[i]}`);
    }
}
else if (choices.toLowerCase()=='d')
{
    let i = Number(prompt('Enter the position you want to delete'));
    s.splice(i, 1);
    alert('done');
    console.log('The current items are: ');
    for (let i=0; i<s.length;i++)
    {
        console.log(`${i+1}. ${s[i]}`);
    }
}