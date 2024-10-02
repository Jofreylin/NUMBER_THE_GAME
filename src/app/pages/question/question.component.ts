import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnDestroy {

  percentage: number = 100;
  interval: any;


  question: string = '¿Cuánto es 5 + 3?';

  constructor(private router: Router) {
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