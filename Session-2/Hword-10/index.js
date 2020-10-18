let mass = Number(prompt("Enter your weight"));
let height = Number(prompt("Enter your height"));
BMI = mass/(height*height);
if (BMI<16)
{
    alert("You are Severely underweight");
}
else if (16.5<BMI<18)
{
    alert("You are Underweight");
}
else if (18.5<BMI<25)
{
    alert("you are Normal");
}
else if (25<BMI<30)
{
    alert("you are Overweight");
}
else if (BMI>30)
{
    alert("you are Obese");
}