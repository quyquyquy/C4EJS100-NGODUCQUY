console.log('1.');
console.log(Math.random().toFixed(2));

console.log('2.');
let array = [2,5,6,9,10];
let randomNumber = array[Math.floor(Math.random()*array.length)];
console.log(randomNumber);

console.log('3.');
quizzes = [
    {
        question: 'how many legs does a cow have?',
        choices: ['2', '3', '6', '4'],
        rightChoice: '4',
    },
    {
        question: 'how many eyes does a spider have?',
        choices: ['2', '3', '8', '10'],
        rightChoice: '8',
    },
    {
        question: 'How many wings does a bird have?',
        choices: ['2', '5', '6', '7'],
        rightChoice: '2',
    },
]
console.log(quizzes);

console.log('4.');
let quizzes = [
    {
        question: 'how many legs does a cow have?',
        choices: '1. 2\n2. 3\n3. 6\n4. 4',
        rightChoice: 4,
    },
    {
        question: 'how many eyes does a spider have?',
        choices: '1. 2\n2. 3\n3. 8\n4. 10',
        rightChoice: 3,
    },
    {
        question: 'How many wings does a bird have?',
        choices: '1. 2\n2. 5\n3. 6\n4. 7',
        rightChoice: 1,
    },
]

let randomQuiz = quizzes[Math.floor(Math.random()*quizzes.length)];
let answer = prompt(`${randomQuiz.question} ${randomQuiz.choices}`);

console.log('5.');
if(randomQuiz.rightChoice == answer) alert('True');
else alert('False')



