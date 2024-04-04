// Preview
// Event Listener
document.getElementById("preview").addEventListener("click", preview);

function preview() {
  // Input
  let red = +document.getElementById("red").value;
  let green = +document.getElementById("green").value;
  let blue = +document.getElementById("blue").value;

  // Process
  var rgb = `rgb(${red}, ${green}, ${blue})`;

  // Output
  document.getElementById("rgb").innerHTML = rgb;
  document.getElementById("box").style.background = rgb;
}

// Black Button
// Event Listener
document.getElementById("black").addEventListener("click", black);

function black() {
  // Process
  var black = `rgb(0, 0, 0)`;

  // Output
  document.getElementById("rgb").innerHTML = black;
  document.getElementById("box").style.background = "black";
}

// White Button
// Event Listener
document.getElementById("white").addEventListener("click", white);

function white() {
  // Process
  var white = `rgb(255, 255, 255)`;

  // Output
  document.getElementById("rgb").innerHTML = white;
  document.getElementById("box").style.background = "white";
}
