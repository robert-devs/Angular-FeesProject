import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/inaterface/studentInterfaces';
import { StudentsService } from 'src/app/Services/Students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentsComponent implements OnInit {
  name = '';
  gender = '';
  age = 0;
  fees = 0;

  filter = '';

  constructor(private studentService: StudentsService) {}

  onSubmit(form: NgForm) {
    // console.log(form);
    this.studentService.addStudent({
      name: this.name,
      gender: this.gender,
      age: this.age,
      fees: this.fees,
    });

    this.name = '';
    this.gender = '';
    this.age = 0;
    this.fees = 0;
    // }
  }

  ngOnInit(): void {}
}
