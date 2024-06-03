import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminStatus = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.adminStatus.asObservable();
  constructor() { }

  setAdminStatus(status: boolean) {
    this.adminStatus.next(status);
  }
}
