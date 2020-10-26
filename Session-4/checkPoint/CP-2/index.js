let movie = {
    title: 'John Wick',
    year: 2014,
    rate: 7.4,
}
console.log(movie);

x = movie.title;
y = movie.year;
r = movie.rate;
let i = prompt('What do you want to know ?')
if (i == 'title' )
{
    alert(x);
}
else if (i == 'year')
{
    alert(y);
}
else if (i == 'rate')
{
    alert(r);
}
else alert(`${i} doesn't exist in your data`);