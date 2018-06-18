import {ParkingSpaceStatus} from './parkingspace.status';

export class ParkingSpaceResponse {

  parkingSpaceId: number;
  parkingSpaceStatus: ParkingSpaceStatus;
  registration: string;
  occupationStartDate: string;

  constructor(parkingSpaceId: number, parkingSpaceStatus: ParkingSpaceStatus, registration: string, occupationStartDate: string) {
    this.parkingSpaceId = parkingSpaceId;
    this.parkingSpaceStatus = parkingSpaceStatus;
    this.registration = registration;
    this.occupationStartDate = occupationStartDate;
  }

}
