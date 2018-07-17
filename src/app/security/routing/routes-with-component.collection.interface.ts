import {Routes} from '@angular/router';
import {Route} from '@angular/router/src/config';
import {Type} from '@angular/core';
import {AuthorityComponentInterface} from '../auth/authority-component.interface';

export interface RoutesWithComponentCollection {

  routes(): Routes;

  getLoginRoute(): Route;

  getFirstRouteByComponent(componentType: Type<AuthorityComponentInterface>): Route ;

}
