import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EachUser } from '../interfaces/each-user';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

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
  tempData: any[]

  constructor(public httpClient: HttpClient) { 
    this.allUsers = [];
    this.tempStr = '';
    this.tempData = []
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(console.log);
  }

  getData() {
    this.httpClient.get<any[]>(this.users_url)
                    .subscribe(data => {
                      this.tempData = data
                      console.log(this.tempData)
                    }, error => {

                    })
  }
  onSubmit() {
    if(this.loginForm.valid) {
      this.getData();

    }
    else {
      alert("Invalid data");
    }
  }

}

// FormGroup is the actual class we use to tie different components together
// FormBuilder is a SERVICE to make form building easier