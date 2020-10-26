let movie = {
    title: 'John Wick',
    year: 2014,
    rate: 7.4,
}

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
else alert(`'${i}' doesn't exist, we'll add it now`);
    movie.review = prompt('Enter the new data');
console.log(movie);
