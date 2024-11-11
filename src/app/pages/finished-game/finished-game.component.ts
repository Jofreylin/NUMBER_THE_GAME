import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finished-game',
  templateUrl: './finished-game.component.html',
  styleUrl: './finished-game.component.css'
})
export class FinishedGameComponent implements OnInit {

  questions: number = 0;
  rightAnswers: number = 0;
  wrongAnswers: number = 0;
  
  ngOnInit(): void {

    this.rightAnswers = Number(localStorage.getItem('rightAnswers') ?? 0)

    this.wrongAnswers = Number(localStorage.getItem('wrongAnswers') ?? 0)
  }

}