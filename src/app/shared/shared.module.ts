import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { BreadcrumbsComponent } from '../components/breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule, 
    HeaderComponent, 
    FooterComponent,
    BreadcrumbsComponent
],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent
]
})

export class SharedModule  { }