import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Demande } from '../models/demande';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url = environment.Api + "terrains/";
  
constructor(private http: HttpClient) { }

GetAllDemnades ():Observable<any>{
  return this.http.get<Demande>(`${this.url}`+'demandes');
}

Approuver (idTerrain:any):Observable<any>{
  return this.http.put<any>(`${this.url}`+'approuver/'+idTerrain,'');
}

Desapprouver (idTerrain:any):Observable<any>{
  return this.http.delete<any>(`${this.url}`+'desapprouver/'+idTerrain);
}

nbApprouver():Observable<any>{
  return this.http.get<number>(`${this.url}`+'/count-terrains-statut-un');
}

}
