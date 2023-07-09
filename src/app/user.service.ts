import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  jwt: any;
  constructor(private httpClient: HttpClient) {}

  login(body: any) {
    return this.httpClient
      .post('http://localhost:8081/auth/login', body)
      .subscribe((result) => {
        this.jwt = result;
        console.warn('JWT', this.jwt);
      });
  }
}
