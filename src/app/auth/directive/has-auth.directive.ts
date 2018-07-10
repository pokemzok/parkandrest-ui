import {Directive, ElementRef, Input} from '@angular/core';
import {Authority} from '../authority';
import {AuthCookiesService} from '../cookies/authcookies.service';
import * as _ from 'underscore';

@Directive({
  selector: '[appHasAuth]'
})
export class HasAuthDirective {

  @Input() appHasAuth: Authority[] = [];

  // FIXME: correct implementation - does not work
  constructor(elementRef: ElementRef, cookies: AuthCookiesService) {
    let hasAllAuthorities = false;
    _.each(this.appHasAuth, function (authority) {
      hasAllAuthorities = hasAllAuthorities && cookies.containsAuthority(authority);
    });
    if (!hasAllAuthorities) {
      elementRef.nativeElement.remove();
    }
  }

}
