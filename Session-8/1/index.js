const plus = document.getElementById("plus");
let subtract = document.getElementById("subtract");
let number = document.getElementById("numbers");

let a = 0;
number.innerHTML = a;

plus.addEventListener('click', () => {
    a++;
    number.innerHTML = a;
});

subtract.addEventListener('click', () => {
    a--;
    number.innerHTML = a;
});