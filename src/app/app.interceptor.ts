import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment.development";
import { ErrorService } from "./components/error/error.service";


const { baseUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private router: Router, private errorService: ErrorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.startsWith('/api')) {
      const user = localStorage.getItem('[user]');
      const auth = JSON.parse(user || '{}');
      const accessToken = auth.accessToken;
      if (accessToken) {
        req = req.clone({
          url: req.url.replace('/api', baseUrl),
          headers: req.headers.set('X-Authorization', accessToken), // ADD X-Authorization
        })
      } else {
        req = req.clone({
          url: req.url.replace('/api', baseUrl),
        })
      }
    }

    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status == 401) {   //Unauthorized
          this.router.navigate(['/login']);
        } else if (err.status == 404) {  //Not Found Resource (Initially is alwasy true!)
          // console.log('you have an error 404');
          return [];
        }
        else {
          //Todo: Implement the Error Service!
          this.errorService.setError(err);
          this.router.navigate(['/error']);
        }
        return [err];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS
}


