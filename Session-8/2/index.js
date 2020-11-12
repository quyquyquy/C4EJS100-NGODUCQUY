let number = document.getElementById("countDown");
let start = document.getElementById("start");
let stop = document.getElementById("stop");


let counts = 0;
let enter;

start.addEventListener('click', () =>{
    counts = number.innerHTML;    
    if (counts <= 0)
    {
        alert('Enter number bigger than 0');
    }
    enter = setInterval(() => {
        counts--;
        if (counts == 0) {
            clearInterval(enter);
        };
    }, 1000);
});

stop.addEventListener('click', () => {
        clearInterval(enter);
});

