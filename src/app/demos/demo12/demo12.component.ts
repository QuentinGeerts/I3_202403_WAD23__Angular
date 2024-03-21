import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from './services/fake-auth.service';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html',
  styleUrl: './demo12.component.scss'
})
export class Demo12Component implements OnInit {


  isConnected!: boolean;

  // Injection de dépendance
  constructor(private _authService: FakeAuthService) { }

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
