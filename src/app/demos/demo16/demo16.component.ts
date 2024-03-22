import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from '../demo12/services/fake-auth.service';

@Component({
  selector: 'app-demo16',
  templateUrl: './demo16.component.html',
  styleUrl: './demo16.component.scss'
})
export class Demo16Component implements OnInit {

  isConnected: boolean = false;

  constructor (private _authService: FakeAuthService) {}

  ngOnInit(): void {
    this.isConnected = this._authService.isAuthenticated;
  }
 
  login() {
    this._authService.connect();
    this.isConnected = this._authService.isAuthenticated;
  }
  logout() {
    this._authService.disconnect();
    this.isConnected = this._authService.isAuthenticated;
  }

}
