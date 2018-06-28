export class ParkingSpaceRequest {

  parkingSpaceId: string;
  parkingSpaceStatus: string;
  registration: string;

  public static empty(): ParkingSpaceRequest {
    return new ParkingSpaceRequest(null, null, null);
  }

  constructor(parkingSpaceId: string, parkingSpaceStatus: string, registration: string) {
    this.parkingSpaceId = parkingSpaceId;
    this.parkingSpaceStatus = parkingSpaceStatus;
    this.registration = registration;
  }

}
