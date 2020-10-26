let movie = {
    title: 'John Wick',
    year: 2014,
    rate: 7.4,
}
console.log(movie);

// movie.rate = 8.7;
// console.log(movie);

// movie.rate = Number(movie.rate) + 0.5;
// console.log(movie);

let i = prompt('What do you want to update ?');
if (i == 'title')
{
    movie.title = prompt('What is the update ?');
}
else if (i == 'year')
{
    movie.year = Number(prompt('What is the update ?'));
}
else if (i == 'rate')
{
    movie.rate = Number(prompt('What is the update ?'));
}
else alert(`${i} doesn't exist in your data`)
console.log(movie);