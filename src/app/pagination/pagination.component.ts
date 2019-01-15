import {Component, Input, OnInit} from '@angular/core';
import {PaginationModel} from './pagination.model';
import {PaginationActionStrategy} from './pagination.action.strategy';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() paginationActionStrategy: PaginationActionStrategy;
  @Input() paginationModel: PaginationModel;

  ngOnInit() {
  }

  onPrevPagination(): boolean {
    return this.onAction( (paginationModel) => paginationModel.selectPreviousPage());
  }

  onNextPagination(): boolean {
    return this.onAction( (paginationModel) => paginationModel.selectNextPage());
  }

  onSelectPaginationNr(paginationNr: number): boolean {
    return this.onAction((paginationModel) =>  paginationModel.selectPage(paginationNr));
  }

  onAction(paginationAction: (paginationModel: PaginationModel) => void): boolean {
    paginationAction(this.paginationModel);
    this.paginationActionStrategy.apply(this.paginationModel);
    return false;
  }

}
