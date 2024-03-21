import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from '../../../demos/demo12/services/fake-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  isConnectedNavbar!: boolean; 

  constructor (private _authService: FakeAuthService) { }
  
  ngOnInit(): void {
    this.isConnectedNavbar = this._authService.isAuthenticated;
  }

}
