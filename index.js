var readlineSync=require("readline-sync")
var username= readlineSync.question("May I know your name? ");
var score=0;
console.log("Welcome "+username+" Let's see how well do you know Money hesit characters!!");
function mhplay(question,answer)
{
  var useranswer=readlineSync.question(question);
  if(useranswer==answer)
  {
    console.log("That's the right answer!!");
    score=score+1;
  }
  else
  {
    console.log("Oops! Wrong one!")
  }
  console.log("Your current score is: ",score);
  console.log("~~~~~~~~~~~~~~~~~");
}
var questions=[{
  question:"Who was the first one to die during the first heist? ",
  answer:"oslo",
},
{
  question:"How many total members were involved in the heist including professor? ",
  answer:"8",
},
{
  question:"Who narrates the entire heist story to the viewers? ",
  answer:"tokyo",
},
{
  question:"Who was the hacker from the group? ",
  answer:"rio",
},
{
  question:"Who dies in the climax of the first heist? ",
  answer:"berlin",
}]

for(var i=0;i<questions.length;i++)
{
  mhplay(questions[i].question,questions[i].answer);
}

if(score==5)
{
  console.log("Congrats!! You were spot on and have won the quiz..Welcome to the professor's gang!!!")
}
