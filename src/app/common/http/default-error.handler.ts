import {ErrorHandler} from './error.handler';
import {TranslatedToastrFacade} from '../toaster/translated-toaster.service';
import {isNullOrUndefined} from 'util';
import {Injectable} from '@angular/core';

@Injectable()
export class DefaultErrorHandler implements ErrorHandler {

  constructor(private toastr: TranslatedToastrFacade) {
  }

  handle(response: any) {
    if (this.isServerErrorPresent(response)) {
      const error = response.error.serverError;
      console.error(error.code + ': ' + error.exceptionMessage);
      this.toastr.error('notifications.serverCodes.' + error.code.toString(), error.exceptionObjects);
    } else if (this.isResponseNonSuccessfull(response)) {
      console.error('Request responded with status: ' + response.status);
      this.toastr.error('notifications.serverStatuses.' + response.status.toString());
    }
  }

  private isServerErrorPresent(response: any) {
    return !isNullOrUndefined(response.error) && !isNullOrUndefined(response.error.serverError);
  }

  private isResponseNonSuccessfull(response: any) {
    return !response.status.toString().match('2[0-9][0-9]');
  }

}
