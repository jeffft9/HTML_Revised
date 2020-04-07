//ARRAY EXERCISE

// Create Empty Student Roster Array

var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT
function addNew(name)
{
  roster.push(name);
}
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array


// REMOVE STUDENT
function remove(name) {
  var index = roster.indexOf(name);
  if (index > -1) {
  roster.splice(index, 1);
}
}
// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// DISPLAY ROSTER

// Create a function called display that prints out the roster to the console.
function display() {
    console.log(roster);

}

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

var input = prompt("Would you like to start the roster web app? y/n")
if(input==="y")
{
  while(input2 !== "quit")
  {
  var input2 = prompt("Please select an action: add, remove, display, or quit.");
  if (input2 === "add") {
    var name = prompt("What name would you like to add?");
    addNew(name);
  }
  else if (input2 === "remove") {
    var name = prompt("What name would you like to remove?");
    remove(name);
  }
  else if (input2 === "display") {
    display();
  }
  else if (input2 == "quit") {
    alert("Thanks for using the Web App! Please refresh the page to start over.");
    break;
  }
  else {
    continue;
  }
}
}
