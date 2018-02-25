import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="juveniles">Juveniles</option>
    <option value="adults" selected="selected">Adults</option>
  </select>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | age: filterByAge">{{currentAnimal.specie}} {{currentAnimal.name}} {{currentAnimal.age}} {{currentAnimal.diet}} {{currentAnimal.location}} {{currentAnimal.caretakers}} {{currentAnimal.sex}} {{currentAnimal.likes}} {{currentAnimal.dislikes}}
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
   @Input() childAnimalList: Animal[];
   @Output() clickSender = new EventEmitter();
   filterByAge: string = "adults";

   editButtonHasBeenClicked(animalToEdit: Animal) {
      this.clickSender.emit(animalToEdit);
   }

   onChange(optionFromMenu) {
     this.filterByAge = optionFromMenu;
   }
}
