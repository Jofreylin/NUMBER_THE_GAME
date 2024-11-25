import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LettersPool, MathQuestionPool} from '../../models/MathQuestionPool'
import { HistoryQuestionPool } from '../../models/HistoyQuestionPool';

@Component({
  selector: 'app-select-number',
  templateUrl: './select-number.component.html',
  styleUrl: './select-number.component.css'
})
export class SelectNumberComponent implements OnInit, OnDestroy {

  numbers: number[] = [];
  selectedNumber: number | null = null;
  percentage: number = 100;

  totalSeconds: number = 15;
  count: number = this.totalSeconds;
  interval: any;

  question: string | null | undefined = '';
  responses: {value: string, isCorrect: boolean}[] = [];
  letters = LettersPool;

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

    const selectedQuestionPoolType = localStorage.getItem('questionPoolType');
    const questionPool = selectedQuestionPoolType == "math" ? MathQuestionPool : selectedQuestionPoolType == "history" ? HistoryQuestionPool : MathQuestionPool;

    // Find the question in the QuestionPool
    const question = questionPool.find(q => q.id === Number(id));
    this.question = question?.question;
    const responses = question?.answers ?? [];
    this.responses = this.shuffle(responses);
    this.totalSeconds = question?.time ?? 15;

    this.doCount()
    this.playBackgroundMusic();  // Iniciar música
  }

  private shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };

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
        const wrongAnswers = Number(localStorage.getItem('wrongAnswers') ?? 0) + 1;
        localStorage.setItem('wrongAnswers', wrongAnswers.toString())
        this.router.navigate(['/timeout'])
      }
    }, 1000);
  }

  clickResponse(response: {value: string, isCorrect: boolean}): void{
    if(response.isCorrect){
      const rightAnswers = Number(localStorage.getItem('rightAnswers') ?? 0) + 1;
      localStorage.setItem('rightAnswers', rightAnswers.toString())
      this.router.navigate(['/correct-answer'])
    }else{
      const wrongAnswers = Number(localStorage.getItem('wrongAnswers') ?? 0) + 1;
      localStorage.setItem('wrongAnswers', wrongAnswers.toString())
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