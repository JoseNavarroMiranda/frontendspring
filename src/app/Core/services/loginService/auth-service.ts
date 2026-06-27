import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = `${enviroment.apiUrl}api/auth/login`;

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password});
  }
}
