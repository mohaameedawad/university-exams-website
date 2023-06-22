import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { StudentsComponent } from './Components/students/students.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { AddExamComponent } from './Components/add-exam/add-exam.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'teacher/dashboard', component: DashboardComponent },
  { path: 'teacher/students', component: StudentsComponent },
  { path: 'teacher/subjects', component: SubjectsComponent },
  { path: 'teacher/add-exam', component: AddExamComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
