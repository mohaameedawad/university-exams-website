import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  RegForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  this.createForm();
  }
  createForm(){
    this.RegForm = this.fb.group({
        FirstName : ['', Validators.compose([Validators.required, Validators.min(1)])],
        SecondName : ['', Validators.compose([Validators.required, Validators.min(1)])],
        email : ['', Validators.compose([Validators.required, Validators.email])],
        // dob : ['', Validators.required],
        password : ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        confirmPassword : ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    })
  }

  console(){
    console.log(this.RegForm);
  }
}
