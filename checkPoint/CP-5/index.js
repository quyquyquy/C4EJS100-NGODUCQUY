console.log('1.')
let movies = {
    title: ['Inuyasha','doraemon','amazing wolrd of gumball'],
    year: [1999,1997,2018],
    rate: [9.0,8.5,8.9],
};
console.log(movies);
console.log('\n');
console.log('2.')
console.log(movies.title[0]);
console.log(movies.year[0]);
console.log(movies.rate[0]);
console.log('\n');

console.log('3.')
console.log(movies.title[2]);
console.log('\n');
console.log('4.')
for (let i=0; i<3; i++)
{
console.log(movies.title[i]);
console.log(movies.year[i]);
console.log(movies.rate[i]);
}
console.log('\n');

console.log('5.');
for (let i=0; i<3; i++)
{
console.log('--------------------');
console.log(movies.title[i]);
console.log(`Year: ${movies.year[i]}`);
console.log(`Rate: ${movies.rate[i]}`);

}

console.log('\n');
console.log('6.');
console.log(movies.rate[2]+0.7);
