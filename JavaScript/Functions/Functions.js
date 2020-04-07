function hello(name){
  console.log("Hello "+name+" !!");
}

function addNum(num1,num2) {
  console.log(num1+num2);
}
addNum(5,10)
addNum("Hello ","World")
function helloSomeone(name="Frankie") {
  console.log("Hello "+name);

}

function formal(name="Sam", title='Sir') {
  return title + " "+ name;
}

var temp = "Welcome "+formal()
console.log(temp+"!!");

function timesFive(numInput) {
  //Local Scope
  var result = numInput*5
  return result
}
console.log(timesFive(5));

//console.log(result); //throws Error because result is Local scope!
//Global scope

var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff) {
  console.log(v);
  stuff = "Reassigned inside func"
  console.log(stuff);
}

fun()
console.log(stuff); //will print "GLOBAL STUFF" and NOT "Reassigned inside func"
