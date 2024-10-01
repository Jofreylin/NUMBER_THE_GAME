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
  private audio: HTMLAudioElement = new Audio();  // Inicializamos el objeto de Audio

  constructor(private router: Router) {
    this.playBackgroundMusic();  // Iniciar música
    this.doCount();
  }
  playBackgroundMusic(): void {
    this.audio.src = 'musica/Ambiente.ogg'; // Verifica que la ruta sea correcta
    this.audio.loop = true; // La música se repite
    this.audio.volume = 0.2;
    this.audio.play().catch(error => {
      console.error('Error al reproducir la música:', error);
    });
  }

  // Método de la cuenta regresiva
  doCount(): void {
    this.interval = setInterval(() => {
      this.percentage -= 10;

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

    // Detener la música al salir del componente
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
}