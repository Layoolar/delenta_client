import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../store/appState';
import { getBreadCrumb } from '../../store/breadcrumbs/breadCrumbs.selectors';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  breadCrumbsSubscription: Subscription | undefined;
  crumbs: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.breadCrumbsSubscription = this.store.select(getBreadCrumb).subscribe(breadCrumbs => {
      this.crumbs = breadCrumbs.breadcrumbs;
    });
  }
}
