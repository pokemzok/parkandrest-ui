import {SpringSort} from './spring-sort';

export interface SpringPageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: number;
  unpaged: number;
  sort: SpringSort;
}
