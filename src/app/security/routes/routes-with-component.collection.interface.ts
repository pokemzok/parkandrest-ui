import {Routes} from '@angular/router';
import {Route} from '@angular/router/src/config';
import {Type} from '@angular/core';
import {AuthorityComponent} from '../auth/authority.component';
import {Authority} from '../auth/authority';

export interface RoutesWithComponentCollection {

  routes(): Routes;

  getLoginRoute(): Route;

  getFirstRouteByComponent(componentType: Type<AuthorityComponent>): Route ;

  getFirstRouteByAuthorities(authorities: Authority[]): Route;

  getFirstRouteByAuthority(authority: Authority): Route;
}
