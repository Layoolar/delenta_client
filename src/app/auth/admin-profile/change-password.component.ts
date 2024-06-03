import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  showPassword: boolean = false;
  postError = false;
  postErrorMessage = '';
  isLoading: boolean = false;
  user!: any;
  token = '';
  updateForm: FormGroup;

  constructor(
     private authService: AuthService,
     private router: Router,
     private toastr: ToastrService
    ) {
     this.updateForm = new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ])
     });
  }

  get f() {
    return this.updateForm.controls;
  }

  onHttpError(errorResponse: any) {
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.updateForm.valid) {
      this.isLoading = true;
      this.authService.updatePassword(this.updateForm.getRawValue()).subscribe(
       result => {
        this.isLoading = false;
        this.user = this.authService.getUserInfo(result.data.token);
        if (result.data.token) {
          this.authService.storeToken(result.data.token);
          this.toastr.success("Updated Password successfully!!");
        } else {
          this.postError = true;
          this.postErrorMessage = "Invalid login credentials";
          this.toastr.error("Error updating password");
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
