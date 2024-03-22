import { ResolveFn } from '@angular/router';
import { User, UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const userResolver: ResolveFn<User | null> = (route, state) => {

  // Récupération de l'id présent dans la route
  const userId = route.params['id'];
  return inject(UserService).get(userId) ?? null;

};
