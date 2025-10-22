import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit {
  @Input() data: string = "";
  @Output() userInput = new EventEmitter<string>();

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
    
  }
}
