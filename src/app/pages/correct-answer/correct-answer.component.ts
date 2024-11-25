import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correct-answer',
  templateUrl: './correct-answer.component.html',
  styleUrl: './correct-answer.component.css'
})
export class CorrectAnswerComponent implements OnInit {

  questions: number = 0;
  rightAnswers: number = 0;

  ngOnInit(): void {
    const mode = localStorage.getItem('gameMode');
    if(mode == '10-question'){
      this.questions = 10;
    }else if(mode == '15-question'){
      this.questions = 15;
    }else if(mode == '5-question'){
      this.questions = 5;
    }

    const rightAnswers = Number(localStorage.getItem('rightAnswers') ?? 0)
    this.rightAnswers = rightAnswers;
  }

}
