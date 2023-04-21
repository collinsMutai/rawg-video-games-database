import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
       
        'x-rapidapi-key': env.x_rapidapi_key,
        'x-rapidapi-host': env.x_rapidapi_host,
      },
      setParams: {
        
        key: env.key,
      },
    });
    return next.handle(req);
  }
}
