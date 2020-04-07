var headone = document.querySelector("#one")
var headtwo = document.querySelector("#two")
var headthree = document.querySelector("#three")

headone.addEventListener('mouseover',function(){
  headone.textContent = "Mouse Currently Over";
  headone.style.color = 'red';
})

headone.addEventListener("mouseout",function () {
  headone.textContent = "HOVER OVER ME";
  headone.style.color = 'black';
})

headtwo.addEventListener("click",function () {
  headtwo.textContent = "CLICKED ON";
  headtwo.style.color = "blue";
})

headthree.addEventListener('dblclick',function () {
  headthree.textContent = 'I WAS DOUBLE CLICKED';
  headthree.style.color = 'red';
})

// console.log("Connected");
