import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers: HttpHeaders | undefined;

  constructor(protected http: HttpClient) { }

  getList(path:string) : Observable<any[]>
  { 
    //var apiUrl = environment.apiUrl;
    return this.http.get(`${environment.apiUrl}${path}`)
    .pipe(map(resp=> resp as any[]))
  }

  getOne(path: string, id?: number, queryParams?: Map<any, any>): Observable<any> {
    let getUrl: string;
    if (id) {
      getUrl = `${environment.apiUrl}${path}` + '/' + id;
    } else {
      getUrl = `${environment.apiUrl}${path}`;
    }

    let params = new HttpParams();
    if (queryParams) {
      queryParams.forEach((value: string, key: string) => {
        params = params.append(key, value);
      });
    }
    return this.http.get(getUrl, { params }).pipe(
      map(resp => resp as any)
    );
  }

  create(path: string, resource:any, options?:any) : Observable<any> {
    return this.http
    .post(`${environment.apiUrl}${path}`, resource, { headers: this.headers })
    .pipe(
      map(response => response)
    );
  }

  update(path: string, resource:any) {
    return this.http
      .put(
        `${environment.apiUrl}${path}` + '/' + resource.id,
        JSON.stringify({ isRead: true })
      )
      .pipe(
        map(response => response),
        
      );
  }


  delete(path: string, id:any) {
    return this.http.delete(`${environment.apiUrl}${path}` + '/' + id).pipe(
      map(response => response),
      
    );
  }


}
