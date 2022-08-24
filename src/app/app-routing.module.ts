import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './Guard/guard.guard';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { BalanceComponent } from './components/balance/balance.component';
import { CompleteFeesComponent } from './components/complete-fees/complete-fees.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StudentsComponent } from './components/student/student.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    canActivate: [GuardGuard],
    component: UserComponent,
    children: [
      {
        path: '',
        component: AllStudentComponent,
      },
      {
        path: 'balance',
        component: BalanceComponent,
      },
      {
        path: 'new',
        component: StudentsComponent,
      },
      {
        path: 'complete-fees',
        component: CompleteFeesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
