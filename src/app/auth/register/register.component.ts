import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      username: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])],
      confirm: ''
    }, {
      validator: CustomValidators.matchPassword
    });
  }

}
