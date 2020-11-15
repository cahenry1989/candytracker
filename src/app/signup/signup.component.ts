import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  userID: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `My Name  ${this.firstName}`;
    alert(message);

    
  }

}
