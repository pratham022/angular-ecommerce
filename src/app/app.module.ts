import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { CheckUserService } from './services/check-user.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,          // internally loads Core module
    AppRoutingModule,
    ProductModule,
    UserModule,
    BrowserAnimationsModule
  ],
  providers: [
    CheckUserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
