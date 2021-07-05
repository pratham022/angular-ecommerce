import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckUserService {

  constructor() { }

  isLoggedIn(): boolean  {

    let jsonString = localStorage.getItem("user") || '';
    if(jsonString === '')
      return false;
    else  
      return true;

  }

  isAdminUser(): boolean {
    if(this.isLoggedIn()) {
      let obj = JSON.parse(localStorage.getItem("user") || '');
      if(obj?.role === 'admin')
        return true;
      else  
        return false;        
    }
    else  
      return false;
  }

  getUserName(): string {
    if(this.isLoggedIn()) {
      let obj = JSON.parse(localStorage.getItem("user") || '');
      if(obj !== '') {
        return obj?.username;
      }
      else  
        return '';
    }
    else  
      return ''
  }
}
