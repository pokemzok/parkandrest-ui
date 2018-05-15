import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class TranslatedToastrFacade {
 // TODO:  extract translateService operation on supply it with toasterService.command as Supplier
  // for example pass toasterService.success as a parameter
  constructor(private translateService: TranslateService, private toasterService: ToastrService) {
    console.log(translateService);
    console.log(toasterService);
  }

  success(key: string | Array<string>, interpolateParams?: Object) {
    this.translateService.get(key, interpolateParams).subscribe((notification: string) => {
      this.toasterService.success(notification);
    });
  }

  error(key: string | Array<string>, interpolateParams?: Object) {
    this.translateService.get(key, interpolateParams).subscribe((notification: string) => {
      this.toasterService.error(notification);
    });
  }

  info(key: string | Array<string>, interpolateParams?: Object) {
    this.translateService.get(key, interpolateParams).subscribe((notification: string) => {
      this.toasterService.info(notification);
    });
  }

  warning(key: string | Array<string>, interpolateParams?: Object) {
    this.translateService.get(key, interpolateParams).subscribe((notification: string) => {
      this.toasterService.warning(notification)
    });
  }

}
