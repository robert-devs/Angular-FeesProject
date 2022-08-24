import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../inaterface/studentInterfaces';

@Pipe({
  name: 'search',
})
export class FilterPipe implements PipeTransform {
  transform(value: Student[], name: string): Student[] {
    if (value.length === 0 || name === '') {
      name = name.toLowerCase();
      return value;
    }
    const student: Student[] = [];
    for (let students of value) {
      if (students.name.toLowerCase().indexOf(name) != -1) {
        student.push(students);
      }
    }
    return student;
  }
}
