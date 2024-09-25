import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  counter: number = 5;

  ngOnInit() {
    // Inicializar la cuenta regresiva
    const interval = setInterval(() => {
      if (this.counter > 0) {
        this.counter--;
      } else {
        clearInterval(interval);
      }
    }, 1000); // Disminuye el contador cada 1 segundo
  }
}