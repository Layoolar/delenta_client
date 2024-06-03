import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss'
})
export class VerificationComponent {
  postError = false;
  postErrorMessage = '';
  isLoading: boolean = false;
  verifyForm: FormGroup;
  vee!: any;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toastr: ToastrService
  ) { 
    this.verifyForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      otp: new FormControl(null, [Validators.required]),
    });
  }

  onHttpError(errorResponse: any) {
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onVerifyPassword() {
    if (this.verifyForm.valid) {
      this.isLoading = true;
      this.authService.verifyEmail(this.verifyForm.getRawValue()).subscribe(
        result => {
          this.isLoading = false; 
          if (result.data) {
            this.authService.storeToken(result.data.token);
            this.vee = result.data.vee;
            this.toastr.success("Verification Successfully!!");
            this.router.navigate(['/login']);
          } else {
            this.postError = true;
            this.postErrorMessage = "Invalid credentials";
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
