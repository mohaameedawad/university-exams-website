import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterationComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegisterationComponent,
    HomeComponent
  ]
})
export class AuthModule { }
