import { Component, OnInit } from '@angular/core';
import { Qushin, Itme } from 'src/app/class/qushin';
import { WizardValidators } from 'src/app/service/WizardValidators';
import { db } from 'src/app/db';
import { GetService } from 'src/app/service/get.service';


interface Result {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   points = [0, 1, 2, 3];
   items: Itme[] = db;
   api : Result[]=[]
   count=0
  arrayqushin: Qushin[] = [];
  qushin: Qushin = new Qushin();
  constructor(private myser : GetService) { }
  cunter :number = 0
  ngOnInit(): void {

    
    this.myser.getdata(this.myser.url.api).subscribe(strgRes => {
      console.log('rspons api ++++++' + strgRes[0]);
      this.api.push(strgRes)



  })

  }

  newQushin() {
    this.qushin.id_q = ++this.cunter,
      this.qushin.q = "wath is number",
      this.qushin.anser = [
        { a: "one", istrue: true },
        { a: "is tow", istrue: false },
        { a: "is ont thre", istrue: false },
        { a: "is fore", istrue: false },
      ]
    this.arrayqushin.push(this.qushin)
    console.log(this.arrayqushin[0].anser);

    console.log(this.arrayqushin );
  }

  
  som(check){
    console.log(check);
    this.myFunction()
    if(check){
      alert("is very good")
     this.count++
    }
  }

  isCorrect(question) {
    console.log(`%c, ${question} red`);
    
    return question.options.every(x => x.selected === x.answer) ? 'correct' : 'wrong';
  };

   myFunction():void {
   this. points.sort(function(a, b)
   {return 0.5 - Math.random()});
    
  }


}