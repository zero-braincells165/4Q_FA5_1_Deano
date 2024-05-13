function generateShape() {
  var number = parseInt(document.getElementById("numberInput").value);
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  var output = "";
  if (number % 2 === 0) {
    // Generate Square
    for (var i = number; i >= 1; i--) {
      for (var j = 1; j <= number; j++) {
        output += i + " ";
      }
      output += "<br>";
    }
  } else {
    // Generate Triangle
    for (var i = number; i >= 1; i--) {
      for (var j = number; j >= i; j--) {
        output += i + " ";
      }
      output += "<br>";
    }
  }
  outputDiv.innerHTML = output;
}
