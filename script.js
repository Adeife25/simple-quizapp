let q1 = document.getElementById("q1").style.display="block";
let q2 = document.getElementById("q2").style.display="none";
let q3 = document.getElementById("q3").style.display="none";
let q4 = document.getElementById("q4").style.display="none";

var currentQuestion = 1;

function nextQuestion() {
  document.getElementById("q" + currentQuestion).style.display = "none";
  currentQuestion++;
  if (currentQuestion <= 4) {
    document.getElementById("q" + currentQuestion).style.display = "block";
  } else {
    alert("Quiz completed!");
  }
}
function previousQuestion() {
    document.getElementById("q" + currentQuestion).style.display = "none";
    currentQuestion--;
    if (currentQuestion >= 1) {
      document.getElementById("q" + currentQuestion).style.display = "block";
    }
}

document.getElementById("q1").style.display = "block";

 function showResults() {
    var score = 0;
    var q1  = document.querySelector('input[name="http"]:checked');
    if (q1 && q1.value === "PUT") {
      score++;
    }


   var q2 = document.querySelector('input[name="crud"]:checked');
if (q2 && q2.value === "Create, Read, Update, Delete") {
  score++;
}

var q3 = document.querySelector('input[name="database"]:checked');
if (q3 && q3.value === "MySQL"){
    score++;
}

var q4 = document.querySelector('input[name="api"]:checked');
if (q4 && q4.value === "Postman"){
    score++;
}
document.getElementById("results").innerText = "Your Score: " + score + " /4"; 

}
function restartQuiz() {

   for (let i = 1; i <= 4; i++) {
    document.getElementById("q" + i).style.display = "none";
   }
   
currentQuestion = 1;
document.getElementById("q1").style.display = "block";
var inputs = document.querySelectorAll('input[type="radio"]');
inputs.forEach(input => input.checked = false);
document.getElementById("results").innerText = "";
}