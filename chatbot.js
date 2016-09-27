var question;
var answer;

var questionConversion = {
  "how old are you?": "Younger than you senior citizen",
  "what is your name?": "Diamond like Rihanna's song",
  "what is your favorite color?": "I love blue like the sky",
  "who is your favorite artist?": "I love Beyonce, Rihanna, and YG",
  "have you ever seen twilight?":"Yaasss that is my cup of tea",

  //"what time is it?"://
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


}
