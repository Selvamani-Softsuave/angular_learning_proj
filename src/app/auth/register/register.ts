import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit {
  @Input() data: string = "";
  @Output() userInput = new EventEmitter<string>();

  constructor(private authService: AuthService, private router: Router){}
  ngOnInit() {
    console.log(this.data);
  }

  signupForm = new FormGroup({
   userId: new FormControl(0),
    emailId: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });
  OnButtonClick(value: string)
  {
    this.userInput.emit(value);
  }
  onSubmit(){
    console.log(this.signupForm.value);
    this.authService.register(this.signupForm.value).subscribe({
      next: (response) => {
        debugger;
        console.log('Registration successful', response);
        this.router.navigate(["/login"]);
      },
      error: (error) => {
        console.error('There was an error during the registration!', error);
      }
    });
  }
}
