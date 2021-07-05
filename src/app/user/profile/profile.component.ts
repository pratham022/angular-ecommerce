import { Component, OnInit } from '@angular/core';
import { EachUser } from '../interfaces/each-user';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userObject: EachUser;
  constructor(private userProfileService: UserProfileService) { 
    this.userObject = {
      id: 0,
      name: '',
      username: '',
      password: '',
      email: '',
      role: '',
      phone: '',
    }
  }

  ngOnInit(): void {
    let obj = this.userProfileService.setLoggedInUser();
    if(obj !== '')
      this.userObject = obj;
  }

}
