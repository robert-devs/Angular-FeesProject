import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/inaterface/studentInterfaces';
import { StudentsService } from 'src/app/Services/Students.service';

@Component({
  selector: 'app-complete-fees',
  templateUrl: './complete-fees.component.html',
  styleUrls: ['./complete-fees.component.scss'],
})
export class CompleteFeesComponent implements OnInit {
  students!: Student[];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.students = this.studentsService.getWithoutBalance();
  }
}
