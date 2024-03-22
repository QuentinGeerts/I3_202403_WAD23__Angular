import { Component } from '@angular/core';
import { FakeAuthService } from '../../services/fake-auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-demo19',
  templateUrl: './demo19.component.html',
  styleUrl: './demo19.component.scss'
})
export class Demo19Component {

  isConnected!: boolean;


  // Injection de dépendance
  constructor(private _authService: FakeAuthService) { }

  ngOnInit(): void {

    // Subject
    this.isConnected = this._authService.isAuthenticated;
    this._authService.statusSubject$.subscribe({
      next: (newIsAuthValue: boolean) => { this.isConnected = newIsAuthValue }
    })

    // BehaviorSubject
    this._authService.statusBehaviorSubject$.subscribe({
      next: (data: boolean) => { this.isConnected = data }
    })

    // console.log(this._authService.statusSubject$.getValue());
    console.log(this._authService.statusBehaviorSubject$.getValue());
    

  }

  login() {
    this._authService.connect();
    // this.isConnected = this._authService.isAuthenticated;
  }

  logout() {
    this._authService.disconnect();
    // this.isConnected = this._authService.isAuthenticated;
  }
}
