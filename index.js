var readlineSync=require('readline-sync');
var chalk=require('chalk');
const log= console.log;
const correctAns= chalk.whiteBright.bold.bgBlue;
const wrong = chalk.whiteBright.bold.bgRed;
const level= chalk.black.italic.bold.bgGreenBright;
const underline= chalk.redBright;
const question_style=chalk.whiteBright;
var score=0;
var name=readlineSync.question("Please enter your name: ");
log(chalk.white.bgMagentaBright.bold.underline("------------Welcome "+name+" to HOW WELL DO YOU KNOW FRIENDS?------------ "));                log("\n ");                
log(chalk.bgYellowBright.black.italic.bold("INSTRUCTION: \n  The following quiz is on the TV show FRIENDS. \n 1.The quiz consists of 2 levels having 5 questions each. \n 2.For each correct answer 1 point will be rewarded and for incorrect answers no points will be rewarded \n "));
log("\n ");  
log(underline("----------------------------------------------------------------------"));
//LEVEL 1
log(level("LEVEL 1"));
var qna1=
 [
  {
    ques:"1. What is Rachel scared of? \na.Swings \nb.Dogs \nc.Cats \n",
    ans:"a",
    print:"The correct answer was swing"
  },
  {
    ques:"2. What's the name of the dancer Joey lived with?  \na.Janine \nb.Janice \nc.Jill \n" ,
    ans:"a",
    print:"The correct answer was Janine"
  },
  {
    ques:"3. What is Joey’s fake name? \na.Mike Hannigan \nb.Bob \nc.Ken Adams \n" ,
    ans:"c",
    print:"The correct answer was Ken Adams"
  },
  {
    ques:"4. What color is the couch in Central Perk? \na.Orange \nb.Brown \nc.Purple \n ",
    ans:"b",
    print:"The correct answer was brown"
  },
  {
    ques:"5. Who says the last line of the series? \na.Pheobe \nb.Chandler \nc.Joey \n",
    ans:"b",
    print:"The correct answer was Chandler"
  }];

function quiz1(question1,answer1)
{
  var userAns1=readlineSync.question(question_style(question1));
  if(userAns1===answer1)
  {
    log(correctAns("You are right!"));
    score++;
  }
else
  log(wrong("Sorry you are wrong!"));
}
//main program
for(var i=0;i<5;i++) {
    var currentQuestion1 = qna1[i];
   quiz1(currentQuestion1.ques, currentQuestion1.ans);
   log(currentQuestion1.print);
  }


log("You SCORED: ", score);
if(score>=3)
{
   log(chalk.bgCyanBright("Congratulations! You are selected to go to the next round"));
   readlineSync.keyInPause();
}
else
{  
   log(chalk.bgCyanBright("Sorry. You are not qualified to enter the next round"));
   process.exit();
}

//LEVEL 2
log(level("LEVEL 2"));

var qna2=
 [
  {
    ques:"6. Monica's grandmother used to live in Monica's apartment. \n",
    ans:true,
    print:"Monica's grandmother did live in Monica's apartment. \n"
  },
  {
    ques:"7. Ross dresses up as Santa at Christmas for Ben. \n" ,
    ans:false,
    print:"Ross dressed up as a an armadillo.\n"
  },
  {
    ques:"8. When the friends are trying to navigate a couch up the stairs, Ross yells Turn! \n" ,
    ans:false,
    print:"Ross yells Pivot!  \n"
  },
  {
    ques:"9.Ross created a comic book as a kid that he called Dino Boy \n ",
    ans:false,
    print:"Ross made a comic book as a kid named Science Boy.\n"
  },
  {
    ques:"10. Pheobe's most popular song was Smelly Cat \n",
    ans:true,
    print:"Smelly Cat was her popular song \n"
  }];

function quiz2(question,answer)
{
   if(readlineSync.keyInYN(question))
  {
    if(answer===true)
    {
    log(correctAns("You are right!"));
    score++;
    } 
    else{log(wrong("Sorry you are wrong!"));}
  }   
  else
  {
      if(answer===false)
      {
      log(correctAns("You are right!"));
      score++;
      } 
    else{log(wrong("Sorry you are wrong!"));}
  }
}
for(var i=0;i<5;i++) {
    var currentQuestion2 = qna2[i];
   quiz2(currentQuestion2.ques, currentQuestion2.ans);
   log(currentQuestion2.print);
  }

log("Your TOTAL SCORED is: ", score);
log(chalk.bgCyanBright("Congratulations! \n"));

var highest=8;
log("HIGH SCORES: \n ");


if(score>highest)
{
  var highest=score;
  log("1. "+ name +" - "+ score +"\n");
}
else
  log("1. Ganga - 8 \n");

if(highest<score)
{
  var second_highest=score;
  log("2. "+ name +" - "+ score +"\n");
}
if(second_highest>score<highest)
{
   var second_highest=score;
  log("2. "+ name +" - "+ score +"\n");
}

log("Thanks for playing");

