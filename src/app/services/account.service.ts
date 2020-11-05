import { Injectable } from '@angular/core';
import { IAccount } from '../account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts: Array<IAccount> = [
    { account: 'aaa - 0029', availableCash: 39160334.42, cngPerc: -.07, cngAmt: 31435.87 },
    { account: 'aaa - 1812', availableCash: 2010926.10, cngPerc: .21, cngAmt: 38881.63 },
    { account: 'aaa - 3810', availableCash: 10050054.07, cngPerc: .07, cngAmt: 8916.69 },
    { account: 'ira - 0146', availableCash: 15884302.39, cngPerc: .03, cngAmt: 7430.83 },
    { account: 'ira - 5200', availableCash: 5763.36, cngPerc: -.08, cngAmt: 8916.69 },
    { account: 'reg - 2019', availableCash: 13465679.34, cngPerc: .0, cngAmt: 0 },
  ];
  constructor() { }

  getAllAccounts<Array>(){
    return this.accounts;
  }

  getAccounts<Array>(limit:number = 3){
    let ar;

    // apply limit
    ar = this.accounts.slice(0, limit);

    return ar;

  }
}
