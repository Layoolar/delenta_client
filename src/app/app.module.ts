import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";  
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterOutlet, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AdminComponent } from './auth/admin/admin.component';
import { appReducer } from './store/appState';
import {  StoreModule } from '@ngrx/store';
import { AppComponent } from "./app.component";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterOutlet, 
    RouterModule, 
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]), // Configure your routes here
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
  ],
  providers: [AppComponent],

  bootstrap: [],
})
export class AppModule { }