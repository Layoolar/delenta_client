import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AuthGuard } from "../services/auth-guard";
import { BlogComponent } from "./blog/blog.component";
import { BlogCommentsComponent } from "./blog-comments/blog-comments.component";
import { AdminProfileComponent } from "./admin-profile/admin-profile.component";

const routes: Routes = [
    {
     path: "", component: AuthComponent, children: [
     { path: "", redirectTo: "/blog", pathMatch: "full" },
     { path: "blog", pathMatch: "full", component: BlogComponent},
     { path: "user-comment", pathMatch: "full", component: BlogCommentsComponent, canActivate: [AuthGuard]},
     { path: "edit-profile", pathMatch: "full", component: AdminProfileComponent, canActivate: [AuthGuard]}
     ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), FormsModule],
    exports: [RouterModule]
})

export class AuthRoutingModule { }