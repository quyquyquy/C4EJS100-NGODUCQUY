console.log(1,2.);
let movie = {
    title: 'attack on titans',
    year: 2013,
    rate: 8.8,
    casts: ['mikasa','eren','armin'],
}

console.log(movie.title);
console.log(`year: ${movie.year}`);
console.log(`rate: ${movie.rate}`);
console.log(`casts: ${movie.casts}`);

console.log('\n');
console.log(3.);
movie.casts.push('levi');
console.log(movie.title);
console.log(`year: ${movie.year}`);
console.log(`rate: ${movie.rate}`);
console.log(`casts: ${movie.casts}`);