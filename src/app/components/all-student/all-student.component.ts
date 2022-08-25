import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/inaterface/studentInterfaces';
import { StudentsService } from 'src/app/Services/Students.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.scss'],
})
export class AllStudentComponent implements OnInit {
  students: Student[] = [];
  newStude: Student[] = [];
  private _listFiter: string = '';
  filteredStudents: Student[] = [];

  constructor(private studentsService: StudentsService) {}

  get listFilter(): string {
    return this._listFiter;
  }

  set listFilter(value: string) {
    this._listFiter = value;
    this.filteredStudents = this.performFilter(value);
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.students.filter((student) =>
      student.name.toLocaleLowerCase().includes(filterBy)
    );
  }

  ngOnInit(): void {
    this.students = this.studentsService.getStudent();
    this.filteredStudents = this.students;
  }
}
