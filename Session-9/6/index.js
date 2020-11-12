function myF(x1, y1, x2, y2){
    sqrt(sqr(x1-x2)+sqr(y1-y2));
};

const d = myF(3, 10, 0, 6);
if (x !== 5) {
  console.log('Failed: the calculation is wrong');
} else {
  console.log('Passed, bravo');
}
