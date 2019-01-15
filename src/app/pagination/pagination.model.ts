import {SpringPagedResponse} from '../common/spring/spring-paged.response';

export class PaginationModel {

  private static readonly FIRST_PAGE: number = 0;
  private static readonly ONE_PAGE: number = 1;
  private _selectedPage: number;
  readonly totalPages: number;

  static of(pagedResponse: SpringPagedResponse<any>): PaginationModel {
    return new PaginationModel(pagedResponse.number, pagedResponse.totalPages)
  }

  constructor(lastPage: number, totalPages: number) {
    this.totalPages = totalPages;
    this._selectedPage = PaginationModel.FIRST_PAGE;
  }

  get selectedPage(): number {
    return this._selectedPage;
  }

  selectPage(pageNr: number) {
    if (!(pageNr < PaginationModel.FIRST_PAGE) && !(pageNr > this.totalPages)) {
      this._selectedPage = pageNr;
    }
  }

  selectPreviousPage() {
    if (this.selectedPage > PaginationModel.FIRST_PAGE) {
      this._selectedPage--;
    }
  }

  selectNextPage() {
    if (this.selectedPage < this.totalPages - 1) {
      this._selectedPage++;
    }
  }

  hasPages() {
    return this.totalPages > PaginationModel.ONE_PAGE;
  }
}
