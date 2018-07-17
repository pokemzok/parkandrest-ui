import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {Authority} from '../auth/authority';
import {Store} from '@ngrx/store';
import {AuthorizationModel} from '../auth/authorization.model';
import * as _ from 'underscore';
import {Subscription} from 'rxjs/index';

@Directive({
  selector: '[appHasAuth]'
})
export class HasAuthDirective implements OnInit, OnDestroy {

  @Input() appHasAuth: Authority[];
  private subscription: Subscription;

  constructor(private elementRef: ElementRef, private authStore: Store<AuthorizationModel>) {}

  ngOnInit(): void {
    this.subscription = this.authStore.select('authorization').subscribe(authModel => {
      let hasAllAuthorities = true;
      _.each(this.appHasAuth, function (authority) {
        hasAllAuthorities = hasAllAuthorities && authModel.containsAuthority(authority);
      });
      if (!hasAllAuthorities) {
        this.elementRef.nativeElement.style.display = 'none';
      } else {
        this.elementRef.nativeElement.style.display =  '';
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
