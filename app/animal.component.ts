import {Component} from '@angular/core';
import { Animal } from './animal.model';

@Component({
   selector: 'app-root',
   template: `
   <div class="container">
      <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>
      <hr>
      <edit-task [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEditing()"></edit-task>
      <new-task (newTaskSender)="addTask($event)"></new-task>
   </div>
   `
})

export class AppComponent {
   selectedAnimal = null;

   masterAnimalList: Animal[] = [
      new Animal('Arctic Fox', "moon", 2, "carnivore", "northern trail", 5, "female", "cool shade", "loud noises"),
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
}
