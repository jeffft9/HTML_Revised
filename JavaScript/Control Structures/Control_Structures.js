var hot = false
var temp = 10

if (temp>80) {
  console.log("Hot Outside");
  hot=true;
}
else if(temp >=60 && temp<=80){
  console.log("Average Temp outside");
  // hot=false;
}
else if (temp >=32 && temp<50) {
console.log("It is pretty cold out there!");
}
else {
  console.log("It is very cold out there!");
}

// console.log(hot);

var ham = 10
var cheese = 10

var report = "blank"

if (ham>= 10 && cheese >= 10) {
  report = "Strong sales of both ham and cheese"
}
else if (ham == 0 && cheese == 0) {
  report = "Nothing Sold!"
}
else {
  report = "We had some sales"
}


console.log(report);
