export interface StartParkingmeterResponse {
  startDateTime: string;
  precalculations: CalculatedChargeDto[]
}

interface CalculatedChargeDto {
  registration: string;
  charge: string;
  currency: string;
  calculationDateTime: string;
  periodsQuantity: number;
  period: string;
}
