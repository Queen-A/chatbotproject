var question;
var answer;

  var now = new Date(Date.now());
  var hours = now.getHours();
  var minutes = now.getMinutes();

var questionConversion = {
  "how old are you?": "Younger than you senior citizen",
  "are you left or right handed?": "I'm neither I'm a coder",
  "what is your favorite food?": "I don't have a favorite food",
  "what would you consider yourself?": "I'm messy and live for drama",
  "are you a people person?": "Nope, I don't like people",
  "what is your name?": "Diamond like Rihanna's song",
  "what is your favorite color?": "I love blue like the sky",
  "who is your favorite artist?": "I love Beyonce, Rihanna, and YG",
  "have you ever seen twilight?": "Yaasss that is my cup of tea",
  "what time is it?": hours + ":" + minutes
}


function speak() {

  question = $("#input").val();

  $("#chat-area").prepend(question + "<br>");

  answer = questionConversion[question];

  if(answer == undefined) {

    var fallback = ["I don't have an answer to your question!", "Why are you asking me nothing?", "Are you crazy, I don't have an answer!", "You bafoon!"];
    var rand = Math.floor((Math.random() * fallback.length));
    $("#chat-area").prepend(fallback[rand] + "<br>");

  }
  else {

    $("#chat-area").prepend(answer + "<br>");
  }

  var now = new Date(Date.now());



}
