let input=document.getElementById("inp");
input.addEventListener('keydown',()=>{
    return input.value;
});
let ran;
let btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    ran=Math.floor(Math.random() * 11 );
    if(input.value == ran){
        alert("Chúc mừng bạn đã đúng");
    }
    else alert(`Rất tiếc bạn đã chọn sai, số đúng này: ${ran}`);
})