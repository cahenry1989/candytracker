import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { User } from '../models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    userID: '',
    password: ''
    
  } 
  constructor(private userService: SignupService) { }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.user.firstName != '' && this.user.lastName != '' && this.user.userID != '' && this.user.password != '' ){
      this.userService.addUser(this.user);
      this.user.firstName = '';
      this.user.lastName ='';
      this.user.userID='';
      this.user.password='';
      this.user.email='';
    }
  }

}


