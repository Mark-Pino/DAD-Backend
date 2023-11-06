import {InjectionToken} from '@angular/core';

export class OauthStore {
  // userData: string;
  enterpriseData?: string;
  username?: string;
  accessToken?: string;
  authorizationCode?: string;
  activeWarehouse?: string;
  activeSerie?: string;
}

export class CredentialsApp {
  client_id: string = '';
  client_secret: string = '';
  redirect_uri: string = '';
}

// export const TOKEN_LAMB_OAUTH_URL = new InjectionToken<string>('Lamb OAuth Url');
export const TOKEN_OAUTH_STORE = new InjectionToken<OauthStore>('Oauth Store');
/*export const TOKEN_LAMB_CREDENTIALS_APP = new InjectionToken<CredentialsApp>('Lamb Credentials App');

export const TOKEN_UPEU_OAUTH_URL = new InjectionToken<string>('Upeu OAuth Url');
export const TOKEN_UPEU_OAUTH_STORE = new InjectionToken<OauthStore>('Upeu Oauth Store');
export const TOKEN_UPEU_CREDENTIALS_APP = new InjectionToken<CredentialsApp>('Upeu Credentials App');

export const TOKEN_LAMB_SHELL_APP_URL = new InjectionToken<CredentialsApp>('Lamb Shell App Url');*/
