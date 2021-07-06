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
    this.updateMenuBar();
    this.checkUserService.getUserNameObserv().subscribe(newUserName => {
      this.userName = newUserName;
    })
    
  }

  setUserName(): void {
    this.userName = this.checkUserService.getUserName();
    console.log(this.userName);
  }
  logoutUser(): void {
    localStorage.removeItem("user");
    this.router.navigate(['login']);
    this.isLoggedIn = this.checkUserService.isLoggedIn();
    this.setUserName();
  }

  updateMenuBar() {
    console.log("Updating");
    if(this.checkUserService.isLoggedIn())
      this.isLoggedIn = true;
    if(this.checkUserService.isAdminUser())
      this.isAdmin = true;
    this.setUserName();
  }

}
