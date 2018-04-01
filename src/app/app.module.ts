import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormInputComponent } from './form/form-input/form-input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    LoginComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
