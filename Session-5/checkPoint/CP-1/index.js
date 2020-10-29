let string=['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];

let count = [];

for (let i=1; i<string.length; i++)
{
    let c = string[i];
    console.log(c);
    if (count[c])
    {
        count[c] ++;
    }
    else count[c]=1;
};
console.log(count);