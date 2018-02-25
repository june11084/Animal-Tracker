import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>New Task</h1>
   <div>
      <label>Specie:</label>
      <input #specie><br>
      <label>Name:</label>
      <input #name><br>
      <label>Age:</label>
      <input #age><br>
      <label>Diet:</label>
      <input #diet><br>
      <label>Location:</label>
      <input #location><br>
      <label>Caretakers:</label>
      <input #caretakers><br>
      <label>Sex:</label>
      <input #sex><br>
      <label>Likes:</label>
      <input #likes><br>
      <label>Dislikes:</label>
      <input #disklikes><br>
      <button (click)="submitForm(specie.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, disklikes.value); specie.value=''; name.value=''; age.value=''; diet.value=''; location.value=''; caretakers.value=''; sex.value=''; likes.value=''; disklikes.value='';">Add</button>
   </div>
  `
})

export class NewAnimalComponent {
   @Output() newAnimalSender = new EventEmitter();
   submitForm(specie:string, name:string, age:number, diet:string, location:string, caretakers:number, sex:string, likes:string, dislikes:string) {
      var newAnimalToAdd: Animal = new Animal(specie, name, age, diet, location, caretakers, sex, likes, dislikes);
      this.newAnimalSender.emit(newAnimalToAdd);
   }
}
