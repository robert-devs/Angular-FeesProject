import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Student, userInfo } from '../inaterface/studentInterfaces';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private router: Router) {}

  isAuthenticated: Boolean = false;

  private students: Student[] = [
    {
      name: 'clara',
      age: 20,
      fees: 2000,
      gender: 'female',
    },
    {
      name: 'trvoh',
      age: 20,
      fees: 0,
      gender: 'male',
    },
    {
      name: 'deniss',
      age: 20,
      fees: 0,
      gender: 'female',
    },
    {
      name: 'oliver',
      age: 20,
      fees: 2000,
      gender: 'male',
    },
  ];

  private userInfo: userInfo = {
    usermail: 'mainrobert04@gmail.com',
    userpass: '1234',
  };

  addStudent(student: Student) {
    this.students.push(student);
  }

  getStudent() {
    return this.students;
  }

  getWithBalance() {
    return this.students.filter((student) => student.fees > 0);
  }

  getWithoutBalance() {
    return this.students.filter((student) => student.fees <= 0);
  }

  getUserInfomation(): userInfo {
    return this.userInfo;
  }

  authenticateUser() {
    this.isAuthenticated = true;
    this.router.navigate(['/user']);
  }
}
