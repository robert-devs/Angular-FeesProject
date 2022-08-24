import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/inaterface/studentInterfaces';
import { StudentsService } from 'src/app/Services/Students.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.scss'],
})
export class AllStudentComponent implements OnInit {
  students!: Student[];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.students = this.studentsService.getStudent();
  }
}
