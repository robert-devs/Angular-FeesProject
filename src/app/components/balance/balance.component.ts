import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/inaterface/studentInterfaces';
import { StudentsService } from 'src/app/Services/Students.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  students!: Student[];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.students = this.studentsService.getWithBalance();
  }
}
