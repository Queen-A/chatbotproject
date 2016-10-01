var question;
var answer;

  var now = new Date(Date.now());
  var hours = now.getHours();
  var minutes = now.getMinutes();

var questionConversion = {
  "how old are you?": ["Younger than you senior citizen", "A women never reveals her age"],
  "are you left or right handed?": ["I'm neither I'm a coder", "Right handed"],
  "what is your favorite food?": ["I don't have a favorite food", "I don't have a favorite food but I hate certain foods"],
  "what would you consider yourself?": ["I'm messy and live for drama ~ Joanne the Scammer"],
  "are you a people person?": ["Nope, I don't like people", "I don't like people who are annoying"],
  "what is your name?": ["Diamond like Rihanna's song"],
  "what is your favorite color?": ["I love blue like the sky", ""],
  "who is your favorite artist?": ["I love Beyonce, Rihanna, and YG", "Me, Myself, and I"],
  "have you ever seen twilight?": ["Yaasss that is my cup of tea"],
  "what time is it?": [hours + ":" + minutes]
}


function speak() {

  question = $("#input").val();

  question= question.toLowerCase();

  $("#chat-area").prepend(question + "<br>");

  var answerArray = questionConversion[question];




  if(answerArray == undefined) {

    var fallback = ["I don't have an answer to your question!", "Why are you asking me nothing?", "Are you crazy, I don't have an answer!", "You bafoon!"];
    var rand = Math.floor((Math.random() * fallback.length));
    $("#chat-area").prepend(fallback[rand] + "<br>");

  }
  else {
    var rand =  Math.floor((Math.random() * answerArray.length));
    $("#chat-area").prepend(answerArray[rand] + "<br>");

}
}

$(document).keydown(function(e) {
 if (e.keyCode == 13) {
   speak();
 }
});
