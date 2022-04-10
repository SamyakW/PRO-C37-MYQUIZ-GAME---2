class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Quizzard of Oz");
    this.title.position(750, 0);

    this.question.html("Question: A man pushed his car past a hotel, only to realize he was bankrupt. How did he figure this out?" );
    this.question.position(250, 150);
    this.option1.html("1: He was robbed as he pushed the car into the parking lot" );
    this.option1.position(280, 175);
    this.option2.html("2: He was playing a board game" );
    this.option2.position(280, 200);
    this.option3.html("3: He received a text stating this" );
    this.option3.position(280, 225);
    this.option4.html("4: He saw a bank nearby and realised it" );
    this.option4.position(280, 250);

    this.input1.position(380, 300);
    this.input2.position(590, 300);
    this.button.position(390, 350);
    this.button2.position(490, 350);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
    })
  }
}
