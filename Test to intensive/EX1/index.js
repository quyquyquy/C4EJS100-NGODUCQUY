let n = prompt('nhap n (4 < n < 20)');
let x = prompt('nhap vao so can tim so doi dien')
let sum ;
d = n/2;
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
        alert("Hay nhap so chan trong khoang tu 4 den 20");
        let n = prompt('nhap n (4 < n < 20)');
        
    }
}
console.log( check(n));
