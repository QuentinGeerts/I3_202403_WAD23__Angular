import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { id: 1, lastname: 'Geerts', firstname: 'Quentin'},
    { id: 2, lastname: 'Legrain', firstname: 'Samuel'},
    { id: 3, lastname: 'Morre', firstname: 'Thierry'},
    { id: 4, lastname: 'Person', firstname: 'Michael'},
  ]

  constructor() { }

  get (id: number): User | undefined {
    return this.users.find(u => u.id === +id);
  }
}


export interface User {
  id: number;
  lastname: string;
  firstname: string;
}