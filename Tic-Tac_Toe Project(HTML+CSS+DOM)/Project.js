//Restart game button
var restart = document.querySelector("#b")



//Grabs all the squares
var squares = document.querySelectorAll("td");

//Clear all the squares
function clearBoard() {
for (var i = 0; i < squares.length; i++) {
  squares[i].textContent = "";
}
}

restart.addEventListener("click",clearBoard);
//Check the square Marker

function ChangeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent=== 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }

}
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',ChangeMarker);
}

//For loop to add events
