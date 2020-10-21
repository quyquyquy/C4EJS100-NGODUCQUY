console.log('Hi, my mane is Quy and here is my sheep size:');
let size = [5,7,300,90,24,50,75];
console.log(...size);

let max = Math.max.apply(null, size);
console.log(`Now my biggest sheep has size ${max}, let's shave it`);

size.splice(size.indexOf(max),1);
console.log('After searing, here is my flock');
console.log(...size);

for (let i = 0; i < size.length; i++) {
    size[i] += 50;
}
console.log('first month');
console.log('One month has passed, my sheeps have grown, here are their size');
console.log(...size);
max = Math.max.apply(null, size);
console.log(`Now my biggest sheep has size ${max}, let's shave it`);

size.splice(size.indexOf(max),1);
console.log('After searing, here is my flock');
console.log(...size);

for (let month = 2; month <= 4; month++) {
    for (let i = 0; i < size.length; i++) {
        size[i] += 50;
    }
    console.log(`month ${month}`);
    console.log('One month has passed, my sheeps have grown, here are their size');
    console.log(...size);

    let max = Math.max.apply(null, size);
    console.log(`Now my biggest sheep has size ${max}, let's shave it`);

    size.splice(size.indexOf(max),1);
    console.log('After searing, here is my flock');
    console.log(...size);
}

let total= 0;
for (let i=0; i<size.length; i++) {
    total += size[i];
}
console.log(`My flock has size in total: ${total}`);
console.log(`I would get ${total}`);