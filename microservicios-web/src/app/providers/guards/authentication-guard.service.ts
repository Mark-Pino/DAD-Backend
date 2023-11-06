import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthStoreService } from '../services/oauth';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuardService implements CanActivate {

  constructor(private router: Router,
    private upeuOAuthStoreService: AuthStoreService,
  ) { }

  canActivate(): boolean {
    if (!this.upeuOAuthStoreService.getAuthorizationCode()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }

  /*
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      return this.afAuth.authState
        .take(1)
        .map(user => !!user)
        .do(loggedIn => {
          if (!loggedIn) {
            console.log("access denied")
            this.router.navigate(['/login']);
          }
      })
  }
  */
}
