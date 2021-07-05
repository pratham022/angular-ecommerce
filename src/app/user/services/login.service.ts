import { Injectable } from '@angular/core';
import { EachUser } from '../interfaces/each-user';

import sampleUsers from '../sampleUsers';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  allUsers: EachUser[];
  constructor() { 
    this.allUsers = []
  }

  getAllUsers(): void {
    this.allUsers =  sampleUsers;
    console.log(this.allUsers);
  }

  isValidLogin(userName: string, password: string): boolean {

    // get a list of users
    this.getAllUsers();

    // check if valid user or not
    let obj = this.allUsers.find(o => o.username === userName);
    if(obj?.password == password) return true;
    return false;
  }
}
