import {CompositeSpecification} from './composite.specification';
import {ISpecification} from './ispecification.inerface';

export class NotSpecification<T> extends CompositeSpecification<T> {

  constructor(private other: ISpecification<T>) {
    super();
  }

  isSatisfiedBy(candidate: T): boolean {
    return this.other.isSatisfiedBy(candidate);
  }
}
