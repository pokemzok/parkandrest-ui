import {PaginationActionStrategy} from '../pagination/pagination.action.strategy';
import {PaginationModel} from '../pagination/pagination.model';
import {ParkingSpaceProvider} from './parkingspace.provider.interface';
import {ParkingSpaceFilter} from './parkingspace.filter';
import {SearchParkingspaceForm} from './search.parkingspace.form';
import {FormGroup} from '@angular/forms';

export class ParkingspacePaginationActionStrategy  implements PaginationActionStrategy {

  private readonly parkingSpaceService: ParkingSpaceProvider;
  private readonly parkingMeterForm: FormGroup;
  private readonly subscribeAction: (response) => void;

  constructor(parkingSpaceService: ParkingSpaceProvider, parkingMeterForm: FormGroup, subscribeAction: (response) => void) {
    this.parkingSpaceService = parkingSpaceService;
    this.parkingMeterForm = parkingMeterForm;
    this.subscribeAction = subscribeAction;
  }

  apply(paginationModel: PaginationModel) {
    this.parkingSpaceService.get(ParkingSpaceFilter.ofFormAndPaginationModel(<SearchParkingspaceForm>this.parkingMeterForm.getRawValue(), paginationModel))
      .subscribe(
        response => this.subscribeAction(response)
      );
  }

}
