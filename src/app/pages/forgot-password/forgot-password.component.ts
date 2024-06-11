import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  email: string = '';
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  onForgotPassword() {
    this.authService.forgotPassword().subscribe(
      response => {
        this.toastr.success("Forgot Password email sent successfully");
        this.router.navigate(['/verification']);
      },
      error => {
        this.toastr.error('Error sending forgot password email');
      }
    )
  }
}
