import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {Authority} from '../authority';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs/index';
import {AuthorizationModel} from '../authorization.model';
import * as _ from 'underscore';

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
        console.log('Adding component');
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
