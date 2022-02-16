const operationDiv = document.getElementById("operation");
const levelDiv = document.getElementById("level");
const problemDiv = document.getElementById("problem");
let operation = "";
level = "";
levelDiv.style.display = "none";
problemDiv.style.display = "none";

function whichOperation(op) {
  operation = op;
  showLevels();
}

function whichLevel(lev) {
  showProblems();
  level = lev;
  if (lev == "basic") {
    generateProblems(10, 99);
  } else if (lev == "intermediate") {
    generateProblems(100, 999);
  } else {
    generateProblems(1000, 9999);
  }
}

function next() {
  whichLevel(level);
}

// common functions
function showLevels() {
  operationDiv.style.display = "none";
  levelDiv.style.display = "block";
}

function showProblems() {
  levelDiv.style.display = "none";
  problemDiv.style.display = "block";
}

function goBack() {
  operationDiv.style.display = "block";
  levelDiv.style.display = "none";
}

function goBackToLevels() {
  levelDiv.style.display = "block";
  problemDiv.style.display = "none";
}

// function that return random number between min and max
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateProblems(min, max) {
  document.getElementById("question").innerHTML = "";
  op = "";
  for (let i = 1; i <= 10; i++) {
    op += "<p>";
    op += "<spam>" + randomNumber(min, max) + " </spam>";
    op += "<spam> " + operation + " </spam>";
    op += "<spam> " + randomNumber(min, max) + " </spam>";
    op += " = ? </p>";
  }
  document.getElementById("question").innerHTML = op;
}
