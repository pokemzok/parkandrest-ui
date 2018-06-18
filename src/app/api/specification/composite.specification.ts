import {ISpecification} from './ispecification.inerface';
import {AndSpecification} from './and.specification';
import {NotSpecification} from './not.specification';
import {OrNotSpecification} from './ornot.specification';
import {OrSpecification} from './or.specification';
import {AndNotSpecification} from './andnot.specification';

// TODO: testme
export abstract class CompositeSpecification<T> implements ISpecification<T> {

  abstract isSatisfiedBy(candidate: T): boolean;

  and(other: ISpecification<T>): ISpecification<T> {
    return new AndSpecification( <CompositeSpecification<T>> this, other);
  }

  andNot(other: ISpecification<T>): ISpecification<T> {
    return new AndNotSpecification( <CompositeSpecification<T>> this, other);
  }

  or(other: ISpecification<T>): ISpecification<T> {
    return new OrSpecification( <CompositeSpecification<T>> this, other);
  }

  orNot(other: ISpecification<T>): ISpecification<T> {
    return new OrNotSpecification( <CompositeSpecification<T>> this, other);
  }

  not(): ISpecification<T> {
    return new NotSpecification( <CompositeSpecification<T>> this);
  }

}
