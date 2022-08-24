import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardGuard } from './Guard/guard.guard';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { BalanceComponent } from './components/balance/balance.component';
import { CompleteFeesComponent } from './components/complete-fees/complete-fees.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { StudentsComponent } from './components/student/student.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AllStudentComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    BalanceComponent,
    CompleteFeesComponent,
    UserComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
