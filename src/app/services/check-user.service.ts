import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckUserService {

  // check user service will be used by menu comp and login comp

  subject = new Subject<string>();      // 1. define subject
  constructor() {
   }

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
        return 'Guest';
    }
    else  
      return 'Guest'
  }

  setUserName(username: string) {
    // add to the subject stream of values
    this.subject.next(username);
  }

  getUserNameObserv(): Observable<string> {
    return this.subject.asObservable();
  }

}
