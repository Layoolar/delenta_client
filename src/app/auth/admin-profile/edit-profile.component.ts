import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileDto } from '../../Dto/user-dto';
import { ProfileService } from '../../services/profile.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {
  isLoading: boolean = false;
  profileForm:  FormGroup;
  postError = false;
  postErrorMessage = '';
  profile: ProfileDto[] = [];
  public firstName = '';

  constructor(
    private toastr: ToastrService,
    private profileService: ProfileService,
    private fb: FormBuilder  
  ) {
    this.profileForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required])
    });
  }

  get f() {
    return this.profileForm.controls;
  }

  onHttpError(errorResponse: any) {
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.isLoading = true;
      const profileUser = this.profileForm.getRawValue();
      this.profileService.editProfile(profileUser).subscribe({
        next: (result) => {
          this.isLoading = false;
          if (result.data) {
            this.toastr.success("Edit Profile successfully");
            // Optionally, you can refresh comments after posting a new one
          } else {
            this.toastr.error(result.errorReason, 'Error');
          }
        },
        error: (error) => {
          this.onHttpError(error);
          this.isLoading = false;
        }
      });
    } else {
      this.toastr.error('Form is not valid');
      Object.keys(this.profileForm.controls).forEach(key => {
        const controlErrors = this.profileForm.get(key)?.errors;
        if (controlErrors != null) {
          console.error('Key control: ' + key + ', errors: ', controlErrors);
        }
      });
    }
  }

}
