import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../form/label-position';
import {ParkingSpaceProvider} from './parkingspace.provider.interface';
import {ParkingSpaceFilter} from './parkingspace.filter';
import {ParkingSpaceResponse} from './parkingspace.response';
import {SelectOption} from '../form/select/options/select-option';
import {TranslatedOptionFactory} from '../form/select/options/translated-option.factory';
import {ParkingSpaceStatus} from './parkingspace.status';
import {AuthorityComponent} from '../security/auth/authority.component';
import {VALIDATIONS_CONFIG} from '../../environments/environment';
import {SearchParkingspaceForm} from './search.parkingspace.form';
import {PaginationModel} from '../pagination/pagination.model';
import {ParkingspacePaginationActionStrategy} from './parkingspace.pagination.action.strategy';

@Component({
  selector: 'app-parkingmeter',
  templateUrl: './parkingmeter.component.html',
  styleUrls: ['./parkingmeter.component.css']
})
export class ParkingMeterComponent implements OnInit, AuthorityComponent {

  parkingMeterForm: FormGroup;
  labelPosition = LabelPosition.NONE;
  parkingSpaceRecords: ParkingSpaceResponse[];
  statusesOptions: SelectOption[];
  paginationModel: PaginationModel;
  paginationActionStrategy: ParkingspacePaginationActionStrategy;

  constructor(@Inject('ParkingSpaceService') private parkingSpaceService: ParkingSpaceProvider, private translatedOptionFactory: TranslatedOptionFactory) {
    this.filterParkingSpaces(ParkingSpaceFilter.empty());
    this.statusesOptions = translatedOptionFactory.optionsOf<string>(
      'options.parkingSpace.',
      Object.keys(ParkingSpaceStatus)
    );
  }

  ngOnInit() {
    this.parkingMeterForm = new FormGroup({
      'id': new FormControl(null, Validators.maxLength(VALIDATIONS_CONFIG.MAX_ID_LENGTH)),
      'parkingSpaceStatus': new FormControl(null),
      'registration': new FormControl(null, Validators.maxLength(VALIDATIONS_CONFIG.MAX_REGISTRATION_NR_LENGTH))
    });
    this.paginationActionStrategy = new ParkingspacePaginationActionStrategy(
      this.parkingSpaceService,
      this.parkingMeterForm,
      (response) => this.parkingSpaceRecords = response.content
    );
  }

  onSearch() {
    this.filterParkingSpaces(ParkingSpaceFilter.ofForm(<SearchParkingspaceForm>this.parkingMeterForm.getRawValue()));
  }

  private filterParkingSpaces(filter: ParkingSpaceFilter) {
    this.parkingSpaceService.get(filter).subscribe(
      response => {
        this.parkingSpaceRecords = response.content;
        this.paginationModel = PaginationModel.of(response);
      }
    );
  }
}
