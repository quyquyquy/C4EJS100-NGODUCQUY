let movies = {
    title: ['Inuyasha','doraemon','amazing wolrd of gumball'],
    year: [1999,1997,2018],
    rate: [9.0,8.5,8.9],
    casts: ['Higurashi Kagome','nobita','nicole'],
}

for (let i=0; i<2; i++)
{
console.log('--------------------');
console.log(movies.title[i]);
console.log(`Year: ${movies.year[i]}`);
console.log(`Rate: ${movies.rate[i]}`);
console.log(`Casts: ${movies.casts[i]}`);
}