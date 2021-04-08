var title;
var headline;
let name;
var fortuneButton;
let answer;

var verb = ["win", "see", "paint", "receive"];
var object = ["car", "dollar", "gift", "flower"];
var timeOfEvent = [" tomorrow", " in 10 years", " next week", " everyday"]

window.addEventListener('DOMContentLoaded', function() {
  title = document.getElementById("welcome");
  headline = document.getElementById("instructions");
  name = document.getElementById("fortune-input");
  fortuneButton = document.getElementById("fortune-button");
  answer = document.getElementById("fortune-output");

  fortuneButton.addEventListener("click", fortune);
  fortuneButton.addEventListener("click", restyle);
})

function fortune() {
  var nameInfo = name.value;

  var randomVerb = Math.floor (Math.random() * verb.length);
  var randomObject = Math.floor (Math.random() * object.length);
  var randomTime = Math.floor (Math.random() * timeOfEvent.length);

  answer.innerText = nameInfo + ", you will " + verb[randomVerb] + " a " + object[randomObject] +  timeOfEvent[randomTime]+ ".";
  // console.log(answer.innerText);
}

function restyle() {
    var rRed = Math.random() * 205;
    var rGreen = Math.random() * 105;
    var rBlue = Math.random() * 255;

    var answerColor = "rgb(" + rRed + "," + rGreen + "," + rBlue + ")"
    var rFontSize = Math.random() * 20

    answer.style.color = answerColor;
    answer.style.textDecoration = "underline";
    answer.style.fontSize = "5vmin";
    // answer.style.letterSpacing = "10px";


    answer.classList.toggle("alteredAnswer");


}
