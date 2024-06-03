import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChangePasswordComponent } from './change-password.component';
import { EditProfileComponent } from './edit-profile.component';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    RouterOutlet,
    RouterModule,
    SharedModule,
    ChangePasswordComponent,
    EditProfileComponent
  ],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent {
  @ViewChild("sidebar")
   sidebar!: MatSidenav;
   event: any;
   public newUrl: any;

   ngOnInit(): void {

   }
  
   selectedTab: string = 'edit-profile';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
