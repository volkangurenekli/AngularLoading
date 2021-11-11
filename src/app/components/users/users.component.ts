import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/users.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  private sub: any;
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getUsers() {
    this.sub = this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
