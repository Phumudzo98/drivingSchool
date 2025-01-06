import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { register } from 'module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl="http://localhost:8080/api"

  constructor(private http: HttpClient) { }


  loginUser(details:any):Observable<any>
  {
    return this.http.post<any>(this.baseUrl+"/enter", details, {responseType: 'text' as 'json'})
  }

  createAccount(details:any)
  {
    return this.http.post<any>(this.baseUrl+"/register", details, {responseType: 'text' as 'json'})
  }
}
