import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  // Subject
  private isAuth: boolean = false;
  statusSubject$: Subject<boolean> = new Subject<boolean>();

  // BehaviorSubject
  statusBehaviorSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuth);


  constructor() { }

  connect () {
    this.isAuth = true;
    this.statusSubject$.next(this.isAuth);
    this.statusBehaviorSubject$.next(this.isAuth);
  }

  disconnect () {
    this.isAuth = false;
    this.statusSubject$.next(this.isAuth);
    this.statusBehaviorSubject$.next(this.isAuth);

  }

  get isAuthenticated (): boolean {
    return this.isAuth;
  }
  
}
