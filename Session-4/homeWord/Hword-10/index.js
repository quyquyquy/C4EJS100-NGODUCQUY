
shape= {
    x: 8,
    y: 70,
    width: 12,
    height: 40,
}
penup();
rt(90);
fd(shape.x);
lt(90);
fd(shape.y);
pendown();
for (let i = 0; i < 2; i++) 
{
    rt(90);
    fd(shape.width);
    rt(90);
    fd(shape.height);
}


shape={
  x: 20,
  y: 40,
  width: 50,
}
penup();
rt(90);
fd(shape.x);
lt(90);
fd(shape.y);
pendown();
for (let i = 0; i < 4; i++) 
{
    rt(90);
    fd(shape.width);
}

  