import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-number',
  templateUrl: './select-number.component.html',
  styleUrl: './select-number.component.css'
})
export class SelectNumberComponent implements OnInit {
  numbers: number[] = [];
  selectedNumber: number | null = null;
  useConfirmButton: boolean = true; // Cambia a `false` si no quieres usar el botón de confirmación

  ngOnInit() {
    this.generateNumbers();
  }

  generateNumbers() {
    const correctNumber = 23; // Número correcto basado en la lógica de tu juego
    this.numbers = this.generateDistractors(correctNumber);
    this.numbers.push(correctNumber);
    this.shuffleNumbers();
  }

  generateDistractors(correctNumber: number): number[] {
    // Generar números distractores
    const distractors: number[] = [];
    while (distractors.length < 7) { // Ajusta la cantidad de distractores
      const randomNum = Math.floor(Math.random() * 100) + 1;
      if (randomNum !== correctNumber && !distractors.includes(randomNum)) {
        distractors.push(randomNum);
      }
    }
    return distractors;
  }

  shuffleNumbers() {
    // Mezclar números en el array
    this.numbers.sort(() => Math.random() - 0.5);
  }

  selectNumber(number: number) {
    this.selectedNumber = number;
    if (!this.useConfirmButton) {
      this.confirmSelection();
    }
  }

  confirmSelection() {
    if (this.selectedNumber !== null) {
      // Lógica para validar la selección y navegar a la Pantalla de Resultado
      console.log('Número seleccionado:', this.selectedNumber);
    }
  }
}