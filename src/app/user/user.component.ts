import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../inaterface/studentInterfaces';
import { StudentsService } from '../Services/Students.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() student!: Student[];

  constructor(public studentService: StudentsService, private router: Router) {}

  ngOnInit(): void {
    this.student = this.studentService.getStudent();
  }

  All() {
    this.router.navigate(['/user/']);
  }
  addStudent() {
    this.router.navigate(['/user/new']);
  }
  Wbalance() {
    this.router.navigate(['/user/balance']);
  }
  NoBalance() {
    this.router.navigate(['/user/complete-fees']);
  }
}
