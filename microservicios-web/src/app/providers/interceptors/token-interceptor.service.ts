import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  private token: any = 'InitialAuthorizationToken';
  private header: any;

  constructor() {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorizationReq = this.token ? this.setAuthHeader(req) : req;
    const urlReq = this.setUrl(authorizationReq);
    const handleRequest = next.handle(urlReq);
    return handleRequest;
  }

  private setAuthHeader(req: HttpRequest<any>): HttpRequest<any> {
    let authorization = this.token;
    if (localStorage.getItem('token')) {
      authorization = localStorage.getItem('token');
    }
    this.header = req.headers
      .set('Authorization', 'Bearer ' + authorization);
    const authorizationReq = req.clone({headers: this.header});
    return authorizationReq;
  }

  private setUrl(req: HttpRequest<any>): HttpRequest<any> {
    if (!req.url.includes('assets/')) {
      return req.clone({url: `${environment.url}${req.url}`});
    } else {
      return req.clone({url: `${req.url}`});
    }
  }
}
