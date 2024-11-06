import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  answers = [
    { letter: 'A', number: '10400' },
    { letter: 'B', number: '10080' },
    { letter: 'C', number: '12060' },
    { letter: 'D', number: '11440' }
  ];

  decorationBars = new Array(4); // Array para las barras de decoración en la opción B
  
  stars = Array.from({ length: 8 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    scale: `scale(${0.5 + Math.random() * 0.5})`
  }));

  floatingQuestions = Array.from({ length: 3 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    scale: `scale(${0.5 + Math.random() * 0.5})`
  }));

  
  private audio: HTMLAudioElement = new Audio();

  ngOnInit() {
    localStorage.setItem('selectedQuestions', JSON.stringify([]));
    this.playBackgroundMusic();
  }

  playBackgroundMusic(): void {
    this.audio.src = 'musica/soundtrack.mp3';
    this.audio.loop = true;
    this.audio.volume = 0.4;
    this.audio.play().catch(error => {
      console.error('Error al reproducir la música:', error);
    });
  }

  stopMusic(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  adjustVolume(level: number): void {
    this.audio.volume = level;
  }

  ngOnDestroy(): void {
    this.stopMusic();
  }
}
