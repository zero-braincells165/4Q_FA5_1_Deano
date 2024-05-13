function generateTriangle() {
  var number = document.getElementById("numberInput").value;
  var triangleDiv = document.getElementById("triangle");
  triangleDiv.innerHTML = "";

  for (var i = number; i >= 1; i--) {
    var line = "";
    for (var j = number; j >= i; j--) {
      line += i + " ";
    }
    triangleDiv.innerHTML += line + "<br>";
  }
}
