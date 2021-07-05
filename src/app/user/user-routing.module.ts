import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';


const userRoutes: Routes = [
    {   path: '', component: UserComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'profile', component: ProfileComponent}
        ]
    },

    // We need to add router-outlet to the parent component in order to render the child
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule {}