import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  visible: boolean = true;
  changeType: boolean = true;
  visible2: boolean = true;
  changeType2: boolean = true;
  postError = false;
  postErrorMessage = '';
  isLoading: boolean = false;
  signUpForm: FormGroup;
  public passwordHide = true;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toastr: ToastrService
  ) { 
    this.signUpForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  viewPass() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }

  viewPass2() {
    this.visible2 = !this.visible2;
    this.changeType2 = !this.changeType2;
  }

  get f() {
    return this.signUpForm.controls;
  }

  onHttpError(errorResponse: any) {
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.isLoading = true;
      const user = this.signUpForm.getRawValue();
      this.authService.signUpUser(user).subscribe({
        next: (result) => {
          if (result.data) {
            this.toastr.success('Account created successfully!!');
            this.authService.setEmail(user.email);
            this.router.navigate(['/login']);
          } else {
            this.toastr.error(result.errorReason, 'Error');
            this.isLoading = false;
          }
        },
        error: (error) => {
          this.onHttpError(error);
          this.isLoading = false;
        }
      });
    } else {
      this.toastr.error('Form is not valid');
      Object.keys(this.signUpForm.controls).forEach(key => {
        const controlErrors = this.signUpForm.get(key)?.errors;
        if (controlErrors != null) {
          console.error('Key control: ' + key + ', errors: ', controlErrors);
        }
      });
    }
  }
}
