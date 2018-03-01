import {Component} from '@angular/core';
import { Animal } from './animal.model';

@Component({
   selector: 'app-root',
   template: `
   <div class="container">
   <h2>Animal Tracker</h2>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal [childAddingAnimal]="AddingAnimal" (newAnimalSender)="addAnimal($event)" (newAnimalSender)="finishedAdding()"></new-animal>
      <div *ngIf!="AddingAnimal && selectedAnimal === null" >
         <button (click)="startAddingAnimal()">Add an Animal</button>
      </div>
   </div>
   `
})

export class AppComponent {
   selectedAnimal = null;
   AddingAnimal = null;
   masterAnimalList: Animal[] = [
      new Animal('Arctic Fox', "moon", 1, "carnivore", "northern trail", 5, "female", "cool shade", "loud noises"),
      new Animal('Arctic Fox', "Mercury", 1, "carnivore", "northern trail", 5, "female", "cool shade", "loud noises"),
      new Animal('Arctic Fox',  "Plato", 2, "carnivore", "northern trail", 5, "female", "cool shade", "loud noises"),
      new Animal('Arctic Fox', "mars", 3, "carnivore", "northern trail", 5, "female", "cool shade", "loud noises")
   ];

   editAnimal(clickedAnimal) {
     this.selectedAnimal = clickedAnimal;
   }

   addAnimal(newAnimalFromChild: Animal) {
      this.masterAnimalList.push(newAnimalFromChild);
   }

   finishedEditing() {
    this.selectedAnimal = null;
   }

   startAddingAnimal(){
      this.AddingAnimal = "true";
   }

   finishedAdding() {
      this.AddingAnimal = null;
   }
}
