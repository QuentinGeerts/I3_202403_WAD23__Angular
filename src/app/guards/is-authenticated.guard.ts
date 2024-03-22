import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FakeAuthService } from '../services/fake-auth.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  return inject(FakeAuthService).isAuthenticated
    ? true
    : inject(Router).navigate(['demos', 'demo16']);
};
