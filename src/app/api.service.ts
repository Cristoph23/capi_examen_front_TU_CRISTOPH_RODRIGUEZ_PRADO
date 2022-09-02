import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ApiService {
  base = environment.base;
  constructor(private http: HttpClient) { }

  getUser(): Observable<any>{
    return this.http.get('http://examen.test/api/users');
  }
}
