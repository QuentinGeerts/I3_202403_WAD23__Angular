import { CanDeactivateFn } from '@angular/router';

export const canLeaveGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return confirm("Voulez-vous quitter la page ?");
};
