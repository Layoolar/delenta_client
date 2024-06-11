import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule, 
    ForgotPasswordComponent,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  visible: boolean = true;
  changeType: boolean = true;
  postError = false;
  postErrorMessage = '';
  user!: any;
  isLoading: boolean = false;
  loginForm: FormGroup;

  public passwordHide = true; 

  constructor(
     private authService: AuthService,
     private router: Router,
     private toastr: ToastrService
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ])
    });
  }

  ngOnInit(): void {
  }
  
  get f() {
    return this.loginForm.controls;
  }

  togglePassword() {
    this.passwordHide = !this.passwordHide;
  }

  onHttpError(errorResponse: any) {
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.authService.login(this.loginForm.getRawValue()).subscribe(
        result => {
          this.isLoading = false; 
          if (result.data) {
            this.authService.storeToken(result.data.token);
            this.user = result.data.user;
            this.toastr.success("Logged In Successfully!!", result.data.user.userName);
            this.router.navigate(['/blog']);
          } else {
            this.postError = true;
            this.postErrorMessage = "Invalid login credentials";
            this.toastr.error("Error logging in");
          }
        },
        error => {
          this.isLoading = false;
          this.onHttpError(error);
        }
      );
    } else {
      this.toastr.error('Invalid credentials', 'Errors!!');
    }
  }
}
