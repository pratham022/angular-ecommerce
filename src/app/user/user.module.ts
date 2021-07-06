import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

import { UserRoutingModule } from './user-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { ProfileComponent } from './profile/profile.component';

import { CheckUserService } from '../services/check-user.service';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    ProfileComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatChipsModule,
    UserRoutingModule,
    HttpClientModule,
  ],
  exports: [
    UserComponent
  ],
  providers: [
    LoginService,               // Only 1 Login service instance will be used by all the components of this module
    CheckUserService
  ]
})
export class UserModule { }
