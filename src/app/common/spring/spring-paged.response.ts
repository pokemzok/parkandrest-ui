import {SpringPageable} from './spring-pageable';
import {SpringSort} from './spring-sort';

export interface SpringPagedResponse<T> {
  content: T;
  first: number;
  last: number;
  number:  number;
  numberOfElements: number;
  size: number;
  totalElement: number;
  totalPages: number;
  pageable: SpringPageable;
  sort: SpringSort;
}
