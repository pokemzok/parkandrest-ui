import {SearchParkingspaceForm} from './search.parkingspace.form';
import {PaginationModel} from '../pagination/pagination.model';
import {FILTER_CONFIG} from '../../environments/environment';

export class ParkingSpaceFilter {

  page: number;
  size: number;
  id: string;
  parkingSpaceStatus: string;
  registration: string;

  public static empty(): ParkingSpaceFilter {
    return new ParkingSpaceFilter(null, null, null, 0);
  }

  public static ofFormAndPaginationModel(form: SearchParkingspaceForm, paginationModel: PaginationModel): ParkingSpaceFilter  {
      return new ParkingSpaceFilter(form.id, form.parkingSpaceStatus, form.registration, paginationModel.selectedPage);
  }

  public static ofForm(form: SearchParkingspaceForm): ParkingSpaceFilter  {
    return new ParkingSpaceFilter(form.id, form.parkingSpaceStatus, form.registration, 0);
  }

  constructor(id: string, parkingSpaceStatus: string, registration: string, page: number) {
    this.page = page;
    this.size = FILTER_CONFIG.MEDIUM_PAGE_SIZE;
    this.id = id;
    this.parkingSpaceStatus = parkingSpaceStatus;
    this.registration = registration;
  }

}
