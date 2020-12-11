import { Component, OnInit } from '@angular/core';
import {SignupService} from '../../services/signup.service';
import { User } from '../../models/signup';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  users: User[];

  constructor(private userService: SignupService) { }

  ngOnInit() {
    return this.userService.getUsers().subscribe( users => {
      this.users = users;
    })
  }

  deleteUser(event, user){
    this.userService.deleteUser(user);
  }

}


