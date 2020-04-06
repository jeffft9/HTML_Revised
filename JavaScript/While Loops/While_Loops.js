var x=0;

while (x < 5) {
console.log("x is currently : "+x);

if (x===3) {
  console.log("X is equal to THREE");
  break;
}
console.log("x is still less than 5, adding 1 to x");
x+=1;
}

//Print even numbers from 1 to 10(inclusive)

var y=1

while (y <= 10) {
  if (y%2 === 0) {
    console.log("Even Number : "+y);
  }
  y+=1;
}
