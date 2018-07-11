import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {Authority} from '../authority';
import {AuthCookiesService} from '../cookies/authcookies.service';
import {SubscriptionLike} from 'rxjs/src/internal/types';

@Directive({
  selector: '[appHasAuth]'
})
export class HasAuthDirective implements OnInit, OnDestroy {

  @Input() appHasAuth: Authority[] = [];
  private subscription: SubscriptionLike;

  // FIXME: correct implementation - does not work
  constructor(elementRef: ElementRef, cookies: AuthCookiesService) {
   /* let hasAllAuthorities = false;
    _.each(this.appHasAuth, function (authority) {
      hasAllAuthorities = hasAllAuthorities && cookies.containsAuthority(authority);
    });
    if (!hasAllAuthorities) {
      elementRef.nativeElement.remove();
    }*/
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
