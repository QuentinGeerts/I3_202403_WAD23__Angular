import { Component } from '@angular/core';

@Component({
  selector: 'app-demo18',
  templateUrl: './demo18.component.html',
  styleUrl: './demo18.component.scss'
})
export class Demo18Component {

  usernameFromLocal!: string;
  username: string = "Quentin";
  usernameFromSession!: string;

  saveLocal() {
    localStorage.setItem("username", this.username);
  }

  loadLocal() {
    this.usernameFromLocal = localStorage.getItem("username") ?? "";
  }

  removeLocal() {
    localStorage.removeItem("username");
  }

  clearLocal() {
    localStorage.clear();
  }

  // --------------------------------------

  saveSession() {
    sessionStorage.setItem("username", this.username);
  }

  loadSession() {
    this.usernameFromSession = sessionStorage.getItem("username") ?? "";
  }

  removeSession() {
    sessionStorage.removeItem("username");
  }

  clearSession() {
    sessionStorage.clear();
  }

}
