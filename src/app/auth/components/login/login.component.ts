import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }
    createForm() {
      this.LoginForm =this.fb.group({
        userName : ['', [Validators.required, Validators.min(1), Validators.max(128)]],
        email : ['', [Validators.required, Validators.email]],
        userRole : ['', [Validators.required]]
      })
    }
    console() {
      console.log(this.LoginForm);
    }

}
