import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { StudentsComponent } from './Components/students/students.component';
import { AddExamComponent } from './Components/add-exam/add-exam.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    SubjectsComponent,
    StudentsComponent,
    AddExamComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    SubjectsComponent,
    StudentsComponent,
    AddExamComponent
  ]
})
export class TeacherModule { }
