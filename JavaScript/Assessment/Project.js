var f_name = prompt("Enter your First Name :")
var l_name = prompt("Enter your Last Name :")
var age = prompt("Enter your Age :")
var height= prompt("Enter your Height (in cms) :")
var pet_name = prompt("Enter your Pet Name :")
alert("Thank You for the Information!")

if (f_name [0] == l_name[0]) {
  if (age > 20 && age < 30) {
    if ( height >= 170 ) {
      if (pet_name.charAt(pet_name.length-1) === "y") {
        console.log("Hello Spy! The package will be delivered Today at 9PM..!!");
      }
    }
  }
}
