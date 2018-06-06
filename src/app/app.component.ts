import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Event, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {LoginComponent} from './login/login.component';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _shouldBlurComponent = false;

  constructor(private translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.initTranslateParams(translate);
    this.onNavigation(router, activatedRoute);
  }

  private initTranslateParams(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  private onNavigation(router: Router, activatedRoute: ActivatedRoute) {
    router.events.subscribe(
      (event: Event) => {

        if (event instanceof NavigationStart) {
          // TODO: show loading animation
        }

        if (event instanceof NavigationEnd) {
          // TODO: hide loading animation
          // TODO: detect route and blur background with flag
          this.onLoginRoute(activatedRoute);
        }

      });
  }

  private onLoginRoute(activatedRoute: ActivatedRoute) {
    const loginRoutes = _.find(activatedRoute.children, (activatedChildRoute: any) => {
        return activatedChildRoute.component.name === LoginComponent.name;
      }
    );
    this._shouldBlurComponent = !_.isEmpty(loginRoutes);
  }

  get shouldBlurComponent(): boolean {
    return this._shouldBlurComponent;
  }
}
