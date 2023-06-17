import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Admin } from '../models/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

url = environment.Api + "admins/login";

login (admin : Admin):Observable<any>{
  return this.http.post<any>(`${this.url}` , admin);
}

}
