import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: Array<any>
  constructor(private usersService: UsersService) { 
    this.userList = []
  }

  ngOnInit(): void {
    this.usersService.getUsersFromApi().subscribe(users => {
      this.userList = users;
    })
  }

}
