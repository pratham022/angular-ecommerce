import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EachUser } from '../interfaces/each-user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  users_url: string = "https://jsonplaceholder.typicode.com/users";
  allUsers: EachUser[];
  tempStr: string;

  constructor(public httpClient: HttpClient, private router: Router) { 
    this.allUsers = [];
    this.tempStr = '';
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(console.log);
  }

  getData() {
    this.httpClient.get<any[]>(this.users_url)
                    .subscribe(data => {
                      this.allUsers = data
                      console.log(this.allUsers)
                    }, error => {

                    })
  }

  isValidLogin(userName: string, password: string): boolean {
    let obj = this.allUsers.find(o => o.username === userName);
    if(obj) return true;
    return false;
  }
  onSubmit() {
    if(this.loginForm.valid) {
      let userName = this.loginForm.value['username'];
      let password = this.loginForm.value['password'];

      // get the list of users from typicode api
      this.getData();

      if(this.isValidLogin(userName, password)) {
        console.log("Login Success");
        this.router.navigate(['products']);
      } else {
        console.log("No account found for this user!")
      }

    }
    else {
      alert("Invalid data");
    }
  }

}

// FormGroup is the actual class we use to tie different components together
// FormBuilder is a SERVICE to make form building easier