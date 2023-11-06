import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class EntityDataService<T> {

  constructor(
    protected httpClient: HttpClient,
    protected endPoint: string,
  ) {
  }

  public getAll$(): Observable<T> {
    // const params = { all: 'true' };
    return this.httpClient.get<T>(this.endPoint);
  }

  public getWithQuery$(params?: any): Observable<T> {
    return this.httpClient.get<T>(this.endPoint, {params: params});
  }


  public getById$(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.endPoint}/${id}`);
  }

  public add$(entity: any): Observable<T> {
    return this.httpClient.post<T>(this.endPoint, entity);
  }

  public update$(id: number, entity: any): Observable<T> {
    return this.httpClient.put<T>(`${this.endPoint}/${id}`, entity);
  }
  public updateObject$(entity: any): Observable<T> {
    return this.httpClient.put<T>(`${this.endPoint}`, entity);
  }
  public delete$(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.endPoint}/${id}`);
  }

  public postFile$(data: object): Observable<any> {
    return this.httpClient.post(this.endPoint, data, {responseType: 'blob'});
  }
  public getFileById$(id:number): Observable<any> {
    return this.httpClient.get(`${this.endPoint}-pdf/${id}`,  {responseType: 'blob'});
  }
  public putFile$(id: number, data: object): Observable<any> {
    return this.httpClient.put(`${this.endPoint}/${id}`, data);
  }

  public updateFile$(id: number, data: object): Observable<any> {
    return this.httpClient.put<T>(`${this.endPoint}/${id}`, data);
  }


}
