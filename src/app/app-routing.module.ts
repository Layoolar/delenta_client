import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { UpdatePasswordComponent } from "./pages/update-password/update-password.component";

const AuthModule = () => import("./auth/auth-routing.module").then(x => x.AuthRoutingModule);

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", pathMatch: "full",  component: LoginComponent },
  { path: "update-password", pathMatch: "full", component: UpdatePasswordComponent },
  {
    path: '**',
    redirectTo: 'login',
  },
 { path: "", loadChildren: AuthModule }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }