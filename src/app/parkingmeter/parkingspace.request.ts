import {ParkingSpaceStatus} from './parkingspace.status';

export class ParkingSpaceRequest {

  // TODO: pagination and sortability as arguments in request
  parkingSpaceId: number;
  parkingSpaceStatus: ParkingSpaceStatus; // TODO: delete Enum, make this a string
  registration: string;

  public static empty(): ParkingSpaceRequest {
    return new ParkingSpaceRequest(null, null, null);
  }

  constructor(parkingSpaceId: number, parkingSpaceStatus: ParkingSpaceStatus, registration: string) {
    this.parkingSpaceId = parkingSpaceId;
    this.parkingSpaceStatus = parkingSpaceStatus;
    this.registration = registration;
  }

}
