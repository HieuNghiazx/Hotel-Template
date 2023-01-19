// Modal
var modal1 = document.getElementById("roomModal1");
var modal2 = document.getElementById("roomModal2");
var modal3 = document.getElementById("roomModal3");
var btn1 = document.getElementById("roomBtn1");
var btn2 = document.getElementById("roomBtn2");
var btn3 = document.getElementById("roomBtn3");
var span = document.getElementsByClassName("close") [0];

btn1.onclick = function () {
  modal1.style.display = "block";
}
btn2.onclick = function () {
  modal2.style.display = "block";
}
btn3.onclick = function () {
  modal3.style.display = "block";
}

span.onclick = function() {
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
}

