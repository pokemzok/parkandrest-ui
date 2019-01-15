export class ParkingSpaceResponse {

  id: string;
  parkingSpaceStatus: string;
  registration: string;
  occupationStartDate: string;

  constructor(parkingSpaceId: string, parkingSpaceStatus: string, registration: string, occupationStartDate: string) {
    this.id = parkingSpaceId;
    this.parkingSpaceStatus = parkingSpaceStatus;
    this.registration = registration;
    this.occupationStartDate = occupationStartDate;
  }

}
