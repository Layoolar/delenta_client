// app.module.ts
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import {  VerificationComponent } from "./pages/verification/verification.component";

const AuthModule = () => import("./auth/auth-routing.module").then(x => x.AuthRoutingModule);

export const routes: Routes = [
  { path: "sign-up", pathMatch: "full", component: SignUpComponent },
  { path: 'login', pathMatch: "full", component: LoginComponent},
   { path: 'forgot-password', pathMatch: 'full', component: ForgotPasswordComponent },
   { path: "update-password", pathMatch: "full", component: UpdatePasswordComponent },
   { path: "verification", pathMatch: "full", component: VerificationComponent },
  { path: "", loadChildren: AuthModule }
];




