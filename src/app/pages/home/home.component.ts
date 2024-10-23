import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  private audio: HTMLAudioElement = new Audio();  // Inicializamos el objeto de Audio

  ngOnInit() {
    localStorage.setItem('selectedQuestions', JSON.stringify([]));
    this.playBackgroundMusic();  // Iniciar música
  }


  playBackgroundMusic(): void {
    this.audio.src = 'musica/soundtrack.mp3'; // Verifica que la ruta sea correcta
    this.audio.loop = true; // La música se repite
    this.audio.volume = 0.5;
    this.audio.play().catch(error => {
      console.error('Error al reproducir la música:', error);
    });
  }

  ngOnDestroy(): void {
    // Detener la música al salir del componente
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
}
