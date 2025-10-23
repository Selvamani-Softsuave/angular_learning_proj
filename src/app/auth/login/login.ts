import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  data: string = "Hello from login component";
  userInput: string = "";
  setItem(value: string) {
    this.userInput = value;
  }

  constructor(private authService: AuthService, private router: Router){}
  loginForm = new FormGroup({
    emailId : new FormControl('', [Validators.required,]),
    password : new FormControl('', [Validators.required])
  });
  loginData = this.loginForm.value;
  onSubmit() {
    debugger;
    console.log(this.loginForm.value);
    const request = this.loginForm.value;
    this.authService.logIn(request).subscribe({
      next: res => {
        console.log("Login successful.....", res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        this.router.navigateByUrl("/users/list");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
