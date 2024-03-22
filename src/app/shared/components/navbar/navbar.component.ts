import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from '../../../services/fake-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {


  isConnectedNavbar!: boolean;

  constructor(private _authService: FakeAuthService) { }

  ngOnInit(): void {
    this.isConnectedNavbar = this._authService.isAuthenticated;
    this._authService.statusSubject$.subscribe({
      next: (data: boolean) => this.isConnectedNavbar = data,
      error: (err) => console.log(err),
      complete: () => console.log("S'exécute à la fin d'office.")

    })
  }

  logout() {
    this._authService.disconnect();
  }
  login() {
    this._authService.connect();
  }

}
