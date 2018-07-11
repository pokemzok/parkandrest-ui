import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {Authority} from '../authority';
import {AuthCookiesService} from '../cookies/authcookies.service';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs/index';
import {AuthorizationModel} from '../authorization.model';

@Directive({
  selector: '[appHasAuth]'
})
export class HasAuthDirective implements OnInit, OnDestroy {

  @Input() appHasAuth: Authority[] = [];
  private subscription: Subscription;

  // FIXME: correct implementation - does not work
  constructor(elementRef: ElementRef, cookies: AuthCookiesService, private authStore: Store<AuthorizationModel>) {

    /* let hasAllAuthorities = false;
     _.each(this.appHasAuth, function (authority) {
       hasAllAuthorities = hasAllAuthorities && cookies.containsAuthority(authority);
     });
     if (!hasAllAuthorities) {
       elementRef.nativeElement.remove();
     }*/
  }

  ngOnInit(): void {
    this.subscription = this.authStore.select('authorization').subscribe(value => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
