import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // injecting service within a service
  constructor(private http: HttpClient) { }

  getUsersFromApi(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
