function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

function generateShape() {
  var input = document.getElementById("numberInput").value;
  var shapeOutput = document.getElementById("shapeOutput");
  
  // Check if the input is numerical
  if (!isNumeric(input)) {
    alert("Please enter a valid number.");
    return;
  }
  
  // Convert input to a number
  var num = parseInt(input);
  
  // Generate shape based on the number
  if (num % 2 === 0) {
    var triangle = "";
    for (var i = 1; i <= num; i++) {
      triangle += "* ".repeat(i) + "<br>";
    }
    shapeOutput.innerHTML = triangle;
  } else {
    var rectangle = "";
    for (var i = 0; i < num; i++) {
      for (var j = 0; j < num; j++) {
        rectangle += "* ";
      }
      rectangle += "<br>";
    }
    shapeOutput.innerHTML = rectangle;
  }
}
