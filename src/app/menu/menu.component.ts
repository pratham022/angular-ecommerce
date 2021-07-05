import { Component, OnInit } from '@angular/core';
import { CheckUserService } from '../services/check-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn: boolean;
  isAdmin: boolean;
  userName: string;
  constructor(private checkUserService: CheckUserService, private router: Router) { 
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.userName = '';
  }

  ngOnInit(): void {
    if(this.checkUserService.isLoggedIn())
      this.isLoggedIn = true;
    if(this.checkUserService.isAdminUser())
      this.isAdmin = true;
    this.setUserName();
    
  }

  setUserName(): void {
    this.userName = this.checkUserService.getUserName();
    console.log(this.userName)
  }
  logoutUser(): void {
    localStorage.removeItem("user");
    this.router.navigate(['login']);
  }

}
