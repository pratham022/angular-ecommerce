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

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent
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
    HttpClientModule
  ],
  exports: [
    UserComponent
  ],
  providers: [
  ]
})
export class UserModule { }
