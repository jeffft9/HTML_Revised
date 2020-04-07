//Objects Exercise
// Note : All 2 might not work in some browsers so keep only one Problem as UNCOMMENTED and rest two as COMMENTED and execute
////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  len : function(){
    console.log(this.name.length)
  }
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.


///////////////////
// PROBLEM 2 /////
/////////////////


// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  notify: function(){
    // for (key in employee) {
    //   alert(key +" "+ employee[key]);
    alert("Name is :"+ this.name+", Job is :"+this.job+", Age is :"+ this.age);

  }
}


///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:

// Add a method called lastName that prints
// out the employee's last name to the console.


var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  LastName: function () {
    console.log(this.name.split(" ")[1]);
  }
}
