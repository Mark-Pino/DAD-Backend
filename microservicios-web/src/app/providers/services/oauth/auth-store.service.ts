import {Inject, Injectable} from '@angular/core';
import {OauthStore, TOKEN_OAUTH_STORE} from '../../utils';

@Injectable({providedIn: 'root'})
export class AuthStoreService { // se esta utilizando este servicio para el local storage
  constructor(
    @Inject(TOKEN_OAUTH_STORE)
    protected xStoreOauth: OauthStore,
  ) {
  }

  public setAccessToken(accessToken: string) {

    localStorage.setItem('accessToken', accessToken);
  }

  public getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  public setAuthorizationCode(authorizationCode: string) {
    localStorage.setItem('authorizationCode', authorizationCode);
  }

  public getAuthorizationCode() {
    return localStorage.getItem('authorizationCode');
  }

  public setUserData(userData: any) {
    localStorage.setItem('username', JSON.stringify(userData));
  }
  public clearAll() {
    localStorage.clear();
  }
}
