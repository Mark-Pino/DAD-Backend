import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";

declare var require: any;

@Injectable()
export class CatchInterceptorService implements HttpInterceptor {
  private started: any;

  constructor(private router: Router, private toastr: ToastrService
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.started = Date.now();
    const handleRequest = next.handle(req);
    return handleRequest.pipe(
      tap(
        (res: HttpEvent<any>) => this.interceptResponse(res, req.method),
        (err: any) => this.catchError(err),
      ),
    );

  }


  private interceptResponse(event: HttpEvent<any>, method: any) {
    if (event instanceof HttpResponse) {
      const elapsed_ms = Date.now() - this.started;
      if (elapsed_ms >= 10 * 1000) {
      }
      if (this.isExceptions(event, method)) {
        this.toastByStatus(event.status, event);
      }
    }
  }

  private isExceptions(event: any, method: any) {
    const resource = this.getOnlyUrlResource(event);
    if (method === 'GET') {
      return false;
    } else if (this.isFileExceptions(resource)) {
      return false;
    }
    return true;
  }

  private isFileExceptions(resource: any) {
    const exceptions = require('./exceptions.json');
    if (exceptions.indexOf(resource) !== -1) {
      return true;
    }
    return false;
  }

  private getOnlyUrlResource(event: HttpResponse<any>) {
    //const resource = (attendance.url).replace(environment.url, '');
    //return resource;
  }

  private catchError(err: any) {
    console.log('---err>>', err);
    if (err instanceof HttpErrorResponse) {
      this.catchHttpError(err);
    } else {
      console.error(err.message);
    }
    this.toastCatchHttpErrorByStatus(err.status, err);
  }

  private catchHttpError(err: HttpErrorResponse) {

    if (err.status === 401 || err.status === 0) {
      this.catchUnauthorized();
    } else {
      console.warn(err.statusText);
    }
  }

  private catchUnauthorized() {
    localStorage.clear();
    // this.setRedirectUrl();
    let st = setTimeout(() => {
      this.navigateToLogin();
      clearTimeout(st);
    }, 300);
  }

  private navigateToLogin() {
    this.router.navigate(['../../login']);
  }

  private toastCatchHttpErrorByStatus(status: number, err: HttpErrorResponse) {
    this.toastr.show(this.getMessageCatchHttpError('M', status, err),
      this.getMessageCatchHttpError('T', status), this.configToast,
      this.getClassByStatus(status, (err && err.error.success)));

    // this.toastr.show(this.getMessageCatchHttpError('M', status, err),
    //   this.getMessageCatchHttpError('T', status), { status: this.getClassByStatus(status, (err && err.error.success)) });
    // console.log(this.getMessageCatchHttpError('M', status, err));
    // console.log(this.getMessageCatchHttpError('T', status));
    // console.log(this.getClassByStatus(status, (err && err.error.success)));

  }

  public getMessageCatchHttpError(type: 'T' | 'M', status: number, err?: HttpErrorResponse) {
    const message = require('./status-messages.json');
    if (type === 'T') {
      return message[status].title;
    }
    return (err && !err.error.success) ? (err && err.error.message) : message[status].description;
  }

  private toastByStatus(status: number, event?: HttpResponse<any>) {
    this.toastr.show(this.getMessage('M', status, event),
      this.getMessage('T', status), this.configToast, this.getClassByStatus(status, (event && event.body.success)));
  }

  public getMessage(type: 'T' | 'M', status: number, event?: HttpResponse<any>) {
    const message = require('./status-messages.json');
    if (type === 'T') {
      return message[status].title;
    }
    return (event && !event.body.success) ? (event && event.body.message) : message[status].description;
  }

  get configToast() {
    return {
      progressBar: true,
    };
  }

  public getClassByStatus(status: number, internalSuccess?: boolean): any {
    let classToast = 'toast-info';
    if (typeof internalSuccess !== 'undefined' && internalSuccess === false) {
      classToast = 'toast-warning';
    } else if (status <= 0) {
      classToast = 'toast-error';
    } else if (status >= 0 && status < 200) {
      classToast = 'toast-info';
    } else if (status >= 200 && status < 300) {
      classToast = 'toast-success';
    } else if (status >= 300 && status < 400) {
      classToast = 'toast-warning';
    } else if (status >= 400 && status < 500) {
      classToast = 'toast-error';
    } else if (status >= 500 && status < 600) {
      classToast = 'toast-error';
    }
    return classToast;
  }
}

