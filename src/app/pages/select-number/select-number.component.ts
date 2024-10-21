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

  question: string = '¿Cuánto es 5 + 3?';
  responses: {value: number, isCorrect: boolean}[] = [
    {
      value: 11,
      isCorrect: false
    },
    {
      value: 10,
      isCorrect: false
    },
    {
      value: 27,
      isCorrect: false
    },
    {
      value: 13,
      isCorrect: false
    },
    {
      value: 19,
      isCorrect: false
    },
    {
      value: 12,
      isCorrect: false
    },
    {
      value: 20,
      isCorrect: false
    },
    {
      value: 8,
      isCorrect: true
    }
  ];

  private audio: HTMLAudioElement = new Audio();  // Inicializamos el objeto de Audio
  constructor(private router: Router){
    
  }

  ngOnInit() {
    this.doCount()
    this.playBackgroundMusic();  // Iniciar música
  }


  playBackgroundMusic(): void {
    this.audio.src = 'musica/Ambiente.ogg'; // Verifica que la ruta sea correcta
    this.audio.loop = true; // La música se repite
    this.audio.volume = 0.2;
    this.audio.play().catch(error => {
      console.error('Error al reproducir la música:', error);
    });
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

  clickResponse(response: {value: number, isCorrect: boolean}): void{
    if(response.isCorrect){
      this.router.navigate(['/correct-answer'])
    }else{
      this.router.navigate(['/wrong-answer'])
    }
  }

  ngOnDestroy(): void {
    if(this.interval){
      clearInterval(this.interval);
    }

    // Detener la música al salir del componente
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  

}