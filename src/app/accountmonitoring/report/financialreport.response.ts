export class FinancialReportResponse {

  chargesSum: number;
  chargesCurrency: string;
  paymentsSum: number;
  paymentsCurrency: string;

  constructor(chargesSum: number, chargesCurrency: string, paymentsSum: number, paymentsCurrency: string) {
    this.chargesSum = chargesSum;
    this.chargesCurrency = chargesCurrency;
    this.paymentsSum = paymentsSum;
    this.paymentsCurrency = paymentsCurrency;
  }

  chargedMoney(): string {
    return this.chargesSum + ' ' + this.chargesCurrency;
  }

  paidMoney(): string {
    return this.paymentsSum + ' ' + this.paymentsCurrency;
  }

}
