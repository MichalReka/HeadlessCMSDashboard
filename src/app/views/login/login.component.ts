import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{

  loginFormGroup : FormGroup;
  
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
   });
  }

  submit(){
    let login = this.loginFormGroup.get('username').value;
    let password = this.loginFormGroup.get('password').value;
    this.authService.login(login,password);
  }
 }
