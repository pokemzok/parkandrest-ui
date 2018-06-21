export class ParkingSpaceResponse {

  parkingSpaceId: string;
  parkingSpaceStatus: string;
  registration: string;
  occupationStartDate: string;

  constructor(parkingSpaceId: string, parkingSpaceStatus: string, registration: string, occupationStartDate: string) {
    this.parkingSpaceId = parkingSpaceId;
    this.parkingSpaceStatus = parkingSpaceStatus;
    this.registration = registration;
    this.occupationStartDate = occupationStartDate;
  }

}
