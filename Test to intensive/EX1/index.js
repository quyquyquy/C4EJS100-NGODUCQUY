let n = prompt('nhập vào n (4 < n < 20)');
let x = prompt('Nhập vào số cần tìm')
function check(){
    if(n % 2 == 0){
        if(n>4 && n<20){
           if(x> (n/2)){
            a =x ;
            b = n/2;
            alert( Number(a - b));
           }
           else if(x <(n/2)){
            let a =+x ;
            let b =+n/2
            alert(a + b);
                
           }
        }
    }
    else{
        alert('vui lòng nhập lại số thỏa mãn điều kiện');
    }
}
console.log( check(n));