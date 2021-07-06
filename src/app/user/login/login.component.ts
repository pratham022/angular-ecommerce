import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EachUser } from '../interfaces/each-user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { CheckUserService } from 'src/app/services/check-user.service';

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


  constructor(private loginService: LoginService, private router: Router, private checkUserService: CheckUserService) { 
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    if(this.loginForm.valid) {
      let userName = this.loginForm.value['username'];
      let password = this.loginForm.value['password'];


      // check is login is valid
      if(this.loginService.isValidLogin(userName, password)) {

        this.checkUserService.setUserName(userName);
        

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