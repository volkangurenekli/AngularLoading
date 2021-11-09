import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/users.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private userService: UserService) {}
  users: User[] = [];

  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
