let movies = ['Inuyasha', 'John Wick', 'Amazing world of Gumball'];

// console.log(1.);
// movies.splice(0, 1);
// console.log(movies);

console.log(2.);
let i = prompt('Enter the number of item you need to delete');
let n = prompt('Enter the position you want to delete');
movies.splice(n, i);
console.log(movies);
