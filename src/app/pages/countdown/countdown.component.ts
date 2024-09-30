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

  constructor(private router: Router){

  }

  ngOnInit() {
    this.doCount()
  }

  doCount(){
    this.interval = setInterval(() => {
      this.counter -= 1;

      if(this.counter == 0){
        clearInterval(this.interval);
        this.router.navigate(['/select'])
      }
    }, 1100);
  }

  ngOnDestroy(): void {
    if(this.interval){
      clearInterval(this.interval);
    }
  }
}