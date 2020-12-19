const n = Number(prompt("nhập n có giá trị từ 4 đến 20"));
const fNumber = Number(prompt("Nhập số đầu tiên"));

function findOppositeNumber(n,fNumber) {
    let x = 0;
    if (fNumber < n/2) {
        return x = fNumber + n/2;
    } else if (fNumber > n/2) {
        return x = fNumber - n/2;
    } else {
        return x = 0 ;
    }
}
alert(`Số cần tìm là: ${findOppositeNumber(n,fNumber)}`);

