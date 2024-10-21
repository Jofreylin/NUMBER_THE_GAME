import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionPool} from '../../models/questions'

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

  question: string | null | undefined = '';
  responses: {value: string, isCorrect: boolean}[] = [];

  private audio: HTMLAudioElement = new Audio();  // Inicializamos el objeto de Audio
  constructor(private router: Router){
    
  }

  ngOnInit() {
    const id = localStorage.getItem('selectedQuestionId');

    if(!id){
      // Handle the case where ID is not found
      console.error('No question ID found in local storage.');
      return;
    }

    // Find the question in the QuestionPool
    const question = QuestionPool.find(q => q.id === Number(id));
    this.question = question?.question;
    this.responses = question?.answers ?? [];

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

  clickResponse(response: {value: string, isCorrect: boolean}): void{
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