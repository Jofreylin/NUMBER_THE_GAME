import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {

  counter: number = 5;
  interval: any;
  itStarted: boolean = false;
  selectedQuestionPoolType: boolean = false;

  constructor(private router: Router){

  }

  ngOnInit() {
    const itStarted: boolean = localStorage.getItem('itStarted') == 'true';
    this.itStarted = itStarted;

    if(itStarted){
      this.checkAnswers()
    }
  }

  selectQuestionPool(type: string): void{
    if(!type){
      return;
    }
    localStorage.setItem('questionPoolType',type);
    localStorage.setItem('selectedQuestionPoolType','true');
    this.selectedQuestionPoolType = true;
  }

  selectMode(type: string){
    if(!type){
      return;
    }
    localStorage.setItem('gameMode',type);
    localStorage.setItem('itStarted','true');
    this.itStarted = true;
    this.doCount();
  }

  checkAnswers(){
    const rightAnswers = Number(localStorage.getItem('rightAnswers') ?? 0)
    const wrongAnswers = Number(localStorage.getItem('wrongAnswers') ?? 0)
    const mode = localStorage.getItem('gameMode');

    const totalAnswers = rightAnswers + wrongAnswers;

    if(mode == '10-question' && totalAnswers >= 10){
      this.router.navigate(['/finished-game'])
    }else if(mode == '15-question' && totalAnswers >= 15){
      this.router.navigate(['/finished-game'])
    }else if(mode == '5-question' && totalAnswers >= 5){
      this.router.navigate(['/finished-game'])
    }else{
      this.router.navigate(['/question'])
    }
  }

  doCount(){
    this.interval = setInterval(() => {
      this.counter -= 1;

      if(this.counter == 0){
        clearInterval(this.interval);
        this.router.navigate(['/question'])
      }
    }, 1100);
  }

  ngOnDestroy(): void {
    if(this.interval){
      clearInterval(this.interval);
    }
  }
}