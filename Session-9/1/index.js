let myPromise = new Promise(function (resolve, reject) {
    resolve(setTimeout(() => {console.log("Promise is the worst 1")}, 2000));
});
console.log(myPromise);

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Promise is the worst 2"), 1000)
//     });
//     let result = await promise;
//     alert(result);
// }
// f();

// let myPromise3 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Promise is the worst")), 1000);
// });

// myPromise3.then(
//     result => console.log(result),
//     error => console.log(error),
// );