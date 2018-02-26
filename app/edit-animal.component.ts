import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <h3>{{childSelectedAnimal.name}}</h3>
          <hr>
          <h3>Edit Animal</h3>
          <label>Enter Animal Name:</label>
          <input [(ngModel)]="childSelectedAnimal.name"><br>
          <label>Enter Animal Age:</label>
          <input [(ngModel)]="childSelectedAnimal.age"><br>
          <label>Enter Animal Caretakers:</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers"><br>
          <button (click)="doneButtonClicked()" (doneButtonClickedSender)="finishedEditing()">Done</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
   @Input() childSelectedAnimal: Animal;
   @Output() doneButtonClickedSender = new EventEmitter();

   doneButtonClicked() {
      this.doneButtonClickedSender.emit();
   }
}
