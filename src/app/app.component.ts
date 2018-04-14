import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {HealthCheckService} from './healthcheck/healthcheck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor (private translate: TranslateService, private healthCheckService: HealthCheckService) {
      translate.setDefaultLang('en');
      translate.use('en');
      healthCheckService.healthCheckServer() // TODO WAIT FOR RESPONSE
    }

}
