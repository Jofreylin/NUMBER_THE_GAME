import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionPool} from '../../models/questions'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnDestroy {

  percentage: number = 100;
  interval: any;


  question: string = '';

  constructor(private router: Router) {
    this.selectRandomQuestion();
  }

  selectRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * QuestionPool.length);
    const randomQuestion = QuestionPool[randomIndex];
  
    this.question = randomQuestion.question;
    // guardar ID en local storage
    localStorage.setItem('selectedQuestionId', randomQuestion.id.toString());
  
    this.doCount();
  }

  // Método de la cuenta regresiva
  doCount(): void {
    this.interval = setInterval(() => {
      this.percentage -= 20;

      if (this.percentage == 0) {
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