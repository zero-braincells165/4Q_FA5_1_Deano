function generateShape() {
  var number = document.getElementById("numberInput").value;
  var shapeDiv = document.getElementById("shape");
  shapeDiv.innerHTML = "";

  if (number % 2 === 0) {
    // Generate Triangle
    for (var i = number; i >= 1; i--) {
      var line = "";
      for (var j = number; j >= i; j--) {
        line += i + " ";
      }
      shapeDiv.innerHTML += line + "<br>";
    }
  } else {
    // Generate Square
    for (var i = number; i >= 1; i--) {
      var line = "";
      for (var j = number; j >= 1; j--) {
        line += i + " ";
      }
      shapeDiv.innerHTML += line + "<br>";
    }
  }
}
