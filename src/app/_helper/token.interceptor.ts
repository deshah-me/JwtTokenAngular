import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({ providedIn: 'root' })
export class tokenInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this.userService.login();
    let jwtToken =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWVwYWtAZ21haWwuY29tIiwiaWF0IjoxNjg4OTMyOTU3LCJleHAiOjE2ODg5MzMwMTd9.PQ8CVU7B-HW0L3TU33VlsfeOzAQ1KOK0TTjLhQ4KK-EWKczrAW4qlI4ARjethahtHnOnmmrDxu8vMISvdpieHA';
    let token = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    return next.handle(token);
    // throw new Error('Method not implemented.');
  }
}
