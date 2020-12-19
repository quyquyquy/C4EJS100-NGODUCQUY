let s1= prompt(String("Nhập chuỗi thứ nhất"));
let s2= prompt(String("Nhập chuỗi thứ hai"))
function merge2String(s1,s2 ) {
    let finalString = "";
    let totalLength = 0;
    if (s1.length > s2.length) {
        totalLength = s1.length;
    } else {
        totalLength = s2.length;
    }
    for (let i = 0; i < totalLength; i++) {
        let char1 = s1[i];
        let char2 = s2[i];
        if (s1[i] == undefined) {
            char1 = "";
        } else if (s2[i] == undefined) {
            char2 = "";
        }
        finalString = finalString + char1 + char2;
    }
    return finalString;
}
alert(merge2String(s1,s2));
