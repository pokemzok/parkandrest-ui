import {isNullOrUndefined} from 'util';
import * as _ from 'underscore';

export abstract class FilterPredicate {

  abstract predicate(): boolean;

  protected equalPredicate <T> (requestParam: T, responseParam: T): boolean {
    return this.isParamPresent(requestParam) ? requestParam === responseParam : true;
  }

  protected containsPredicate <T> (requestParam: T, responseCollection: T[]) {
    return this.isParamPresent(requestParam) ? _.contains(responseCollection, requestParam) : true;
  }

  private isParamPresent(requestParam: any) {
    return !isNullOrUndefined(requestParam) && !_.isEmpty(requestParam);
  }

}
