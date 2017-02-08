import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // Instantiate users to an empty array
  users: any = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // Retrieve users from the API
    this.usersService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

}
