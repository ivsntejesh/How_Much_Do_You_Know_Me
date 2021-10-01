var readlineSync = require('readline-sync'); 

var QuestionArray = {
  ques: ["Where was I born?",
  "Where did I do my graduation?",
  "What is my favorite place in Manipal?",
  "What was my block number during the first year?",
  "What is my branch in my B.Tech?"], 

  ans: ["Vijayawada", "Manipal", "End point", "5", "EEE"]
}

var score = 0;

function checkQ(Question, Answer){
  var UserAns = readlineSync.question(Question + "\n");

  if(UserAns.toLowerCase() === Answer.toLowerCase()){
    score = score + 10;
    console.log("You are right!")
  }
  else{
    console.log("You are wrong");
    console.log("The correct answer is " + Answer + "\n");
    score = score - 5;
  }

  console.log("Your score is " + score + "\n");
}

console.log("Welcome to GOT quiz" + "\n");
var name = readlineSync.question("Enter your name: ");
console.log("Welcome " + name);

console.log("For every correct answer you get 10 points" + "\n" + 
  "For every wrong answer you loose 5 points");

console.log("Let's start the game!!" + "\n" + "\n")

for(var i = 0; i < 5; i = i + 1){
  checkQ(QuestionArray.ques[i], QuestionArray.ans[i]);
}

console.log("Your final score is: " + score + "!!");