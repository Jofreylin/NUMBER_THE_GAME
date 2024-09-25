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

  constructor(private router: Router){
    this.doCount()
  }

  doCount(){
    this.interval = setInterval(() => {
      this.percentage -= 10;

      if(this.percentage == 0){
        clearInterval(this.interval);
        this.router.navigate(['/select'])
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if(this.interval){
      clearInterval(this.interval);
    }
  }


}