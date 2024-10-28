import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
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
