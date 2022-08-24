import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/Students.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(public userservice: StudentsService) {}

  ngOnInit(): void {}

  loginUser() {
    let userInfomation = this.userservice.getUserInfomation();
    if (
      userInfomation.usermail === this.email &&
      userInfomation.userpass === this.password
    ) {
      this.userservice.authenticateUser();
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}
