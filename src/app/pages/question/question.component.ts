import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MathQuestionPool } from '../../models/MathQuestionPool'
import { HistoryQuestionPool } from '../../models/HistoyQuestionPool';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnDestroy {

  percentage: number = 100;
  interval: any;


  question: string = '';
  hint: string = '';

  constructor(private router: Router) {
    this.selectRandomQuestion();
  }

  selectRandomQuestion() {

    const selectedQuestionPoolType = localStorage.getItem('questionPoolType');
    const questionPool = selectedQuestionPoolType == "math" ? MathQuestionPool : selectedQuestionPoolType == "history" ? HistoryQuestionPool : MathQuestionPool;

    let selectedQuestions: number[] = JSON.parse(localStorage.getItem('selectedQuestions') || '[]');
    const unpickedQuestions = questionPool.filter(q => !selectedQuestions.includes(q.id));

    let randomQuestion;

    // If there are unpicked questions, choose from them
    if (unpickedQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * unpickedQuestions.length);
      randomQuestion = unpickedQuestions[randomIndex];
    } else {
      // If all questions have been picked, reset the selection and allow picking repeated questions
      selectedQuestions = [];
      const randomIndex = Math.floor(Math.random() * questionPool.length);
      randomQuestion = questionPool[randomIndex];
    }

    // Store the selected question's ID in localStorage
    selectedQuestions.push(randomQuestion.id);
    localStorage.setItem('selectedQuestions', JSON.stringify(selectedQuestions));

    this.hint = randomQuestion.hint;
    this.question = randomQuestion.question;
    // guardar ID en local storage
    localStorage.setItem('selectedQuestionId', randomQuestion.id.toString());

    this.doCount();
  }

  // Método de la cuenta regresiva
  doCount(): void {
    this.interval = setInterval(() => {
      this.percentage -= 30;

      if (this.percentage <= 0) {
        clearInterval(this.interval);
        this.router.navigate(['/select']);
      }
    }, 1000);
  }

  // Cuando el componente se destruye
  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}