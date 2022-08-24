import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StudentsService } from '../Services/Students.service';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(
    private studentService: StudentsService,
    private router: Router
  ) {}
  canActivate() {
    if (this.studentService.isAuthenticated) {
      return true;
    } else {
      return false;
    }
  }
}
