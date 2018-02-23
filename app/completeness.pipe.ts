import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
   name: "completeness",
   pure: false
})


export class CompletenessPipe implements PipeTransform {
   transform(input: Task[], desiredCompleteness) {
     var output: Task[] = [];
     if(desiredCompleteness === "incompleteTasks") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].done === false) {
           output.push(input[i]);
         }
       }
       return output;
     } else if (desiredCompleteness === "completedTasks") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].done === true) {
           output.push(input[i]);
         }
       }
       return output;
     } else {
       return input;
     }
   }
}
