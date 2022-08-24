import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../inaterface/studentInterfaces';

@Pipe({
  name: 'search',
})
export class searchPipe implements PipeTransform {
  transform(value: Student[], name: string): Student[] {
    if (value.length == 0 || name == '') {
      name = name.toLowerCase();
      return value;
    }
    const searched: Student[] = [];
    for (let students of value) {
      if (students.name.toLowerCase().indexOf(name.toLocaleLowerCase()) != -1) {
        searched.push(students);
      }
    }
    return searched;
  }
}
