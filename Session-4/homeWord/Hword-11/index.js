clear()
const circle = {
    shape: 'circle',
    x: 100,
    y: 50,
    radius: 30,
};
penup();
rt(90);
fd(circle.x);
lt(90);
fd(circle.y);
pendown();
  for (var i=1; i <= 900; i++) {
    fd(1)
    lt(360/900)
  }
