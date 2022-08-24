import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/Students.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public userservice: StudentsService, private router:Router) {}

  ngOnInit(): void {}

  getStyle() {
    return 'display';
  }

  getDisplay() {
    return 'style';
  }
  logoutUser(){
     this.router.navigate(['/'])
     this.userservice.isAuthenticated = false
  }
}
