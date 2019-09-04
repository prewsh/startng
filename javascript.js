var Modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

var openBtn = document.getElementById("myBtn");

openBtn.onclick = function() {
    Modal.style.display = "block";
  }

span.onclick = function() {
    Modal.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      Modal.style.display = "none";
    }
}