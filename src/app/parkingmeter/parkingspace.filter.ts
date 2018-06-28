export class ParkingSpaceFilter {

  parkingSpaceId: string;
  parkingSpaceStatus: string;
  registration: string;

  public static empty(): ParkingSpaceFilter {
    return new ParkingSpaceFilter(null, null, null);
  }

  constructor(parkingSpaceId: string, parkingSpaceStatus: string, registration: string) {
    this.parkingSpaceId = parkingSpaceId;
    this.parkingSpaceStatus = parkingSpaceStatus;
    this.registration = registration;
  }

}
