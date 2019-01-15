import {HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';
import {Deauthenticate} from '../store/actions/deauthenticate';
import {AuthCookiesService} from '../cookies/authcookies.service';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {Inject, Injectable} from '@angular/core';
import {RoutesWithComponentCollection} from '../routes/routes-with-component.collection.interface';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AuthorizationModel} from './authorization.model';

@Injectable()
export class UnauthrorizedInterceptor implements HttpInterceptor {

  constructor(
    private http: HttpClient,
    private authCookiesService: AuthCookiesService,
    private toasterService: TranslatedToastrFacade,
    @Inject('RoutesWithComponentCollection') private routesCollection: RoutesWithComponentCollection,
    private router: Router,
    private authStore: Store<AuthorizationModel>) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        () => {
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.authCookiesService.clearAuthCookies();
              this.authStore.dispatch(new Deauthenticate());
              const loginRoute = this.routesCollection.getLoginRoute();
              this.router.navigateByUrl(loginRoute.path);
            }
          }
        }
      )
    );
  }

}
