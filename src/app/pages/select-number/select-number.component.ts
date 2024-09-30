import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-number',
  templateUrl: './select-number.component.html',
  styleUrl: './select-number.component.css'
})
export class SelectNumberComponent implements OnInit, OnDestroy {

  numbers: number[] = [];
  selectedNumber: number | null = null;
  percentage: number = 100;

  readonly totalSeconds: number = 30;
  count: number = this.totalSeconds;
  interval: any;

  constructor(private router: Router){
    
  }

  ngOnInit() {
    this.doCount()
  }

  doCount(){
    this.count = this.totalSeconds;
    this.interval = setInterval(() => {
      this.count -= 1;
      this.percentage = (this.count/this.totalSeconds)*100;
      if(this.count == 0){
        clearInterval(this.interval);
        this.router.navigate(['/timeout'])
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if(this.interval){
      clearInterval(this.interval);
    }
  }

  

}