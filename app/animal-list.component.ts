import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">All</option>
    <option value="juveniles">Juveniles</option>
    <option value="adults">Adults</option>
  </select>
  <ol>
    <li *ngFor="let currentAnimal of childAnimalList | age: filterByAge">Speice: {{currentAnimal.specie}}<br>Name: {{currentAnimal.name}}<br>Age: {{currentAnimal.age}}<br>Diet: {{currentAnimal.diet}}<br>Location: {{currentAnimal.location}}<br>Caretakers: {{currentAnimal.caretakers}}<br>Sex: {{currentAnimal.sex}}<br>Likes: {{currentAnimal.likes}}<br>Dislikes: {{currentAnimal.dislikes}}<br><button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
    <hr>
    </li>
  </ol>
  `
})

export class AnimalListComponent {
   @Input() childAnimalList: Animal[];
   @Output() clickSender = new EventEmitter();
   filterByAge: string = "all";

   editButtonHasBeenClicked(animalToEdit: Animal) {
      this.clickSender.emit(animalToEdit);
   }

   onChange(optionFromMenu) {
     this.filterByAge = optionFromMenu;
   }
}
