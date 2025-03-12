export interface AccountVm {
  iban: string;
  name: string;
  balance: string;
}

export interface MovementVm {
  id: string;
  description: string;
  amount: string;
  balance: string;
  transaction: Date;
  realTransaction: Date;
  accountId: string;
}
