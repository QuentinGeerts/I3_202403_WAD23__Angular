import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  private isAuth: boolean = false;

  constructor() { }

  connect () {
    this.isAuth = true;
  }

  disconnect () {
    this.isAuth = false;
  }

  get isAuthenticated (): boolean {
    return this.isAuth;
  }
  
}
