class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    question.hide(); 

    background(backgroundImage);
    fill(0);
    textSize(30);
    text("Result of the Quiz",750, 50);
    text("----------------------------",730, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 380;
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",450,600);

      for(var plr in allContestants){
        debugger;
        var correctAns = "2";

        // if (correctAns !== allContestants[plr].answer){
        //   fill("Green")
        // }
        // else{
        //   fill("red");
        // }

         if (correctAns === allContestants[plr].answer){
         fill("Green")
         }
         else{
           fill("red");
        }

        // if (correctAns === allContestants[plr].answer){
        //   fill("red")
        // }
        // else{
        //   fill("green");
        // }

        // if (correctAns = allContestants[plr].answer){
        //   fill("Green")
        // }
        // else{
        //   fill("red");
        // }

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 150,display_Answers)
      }
    }
  }
}
