import {PaginationModel} from './pagination.model';

export interface PaginationActionStrategy {
  apply(paginationModel: PaginationModel);
}
