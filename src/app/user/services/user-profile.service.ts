import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  
  constructor() {
  }

  setLoggedInUser() {
    let obj = JSON.parse(localStorage.getItem("user") || '');
    return obj;
  }
}
