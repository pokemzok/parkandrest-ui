import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class TranslatedToastrFacade {

  constructor(private translateService: TranslateService, private toasterService: ToastrService) {}

  success(key: string | Array<string>, interpolateParams?: Object) {
    this.translate(key, interpolateParams, (notification: string) =>
      this.toasterService.success(notification)
    );
  }

  error(key: string | Array<string>, interpolateParams?: Object) {
    this.translate(key, interpolateParams, (notification: string) =>
      this.toasterService.error(notification)
    );
  }

  info(key: string | Array<string>, interpolateParams?: Object) {
    this.translate(key, interpolateParams, (notification: string) =>
      this.toasterService.info(notification)
    );
  }

  warning(key: string | Array<string>, interpolateParams?: Object) {
    this.translate(key, interpolateParams, (notification: string) =>
      this.toasterService.warning(notification)
    );
  }

  private translate(key: string | Array<string>, interpolateParams?: Object, subscribeAction?: (value: string) => void) {
    this.translateService.get(key, interpolateParams).subscribe(subscribeAction);
  }
}
