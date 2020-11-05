import { Component, OnInit } from '@angular/core';
import { IAccount } from '../account';


// ╔═╗┌─┐┬─┐┬  ┬┬┌─┐┌─┐┌─┐
// ╚═╗├┤ ├┬┘└┐┌┘││  ├┤ └─┐
// ╚═╝└─┘┴└─ └┘ ┴└─┘└─┘└─┘
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.less']
})
export class ViewerComponent implements OnInit {
  showLoader: Boolean = true;

  sortDir : Boolean = true; // false === desc
  sortKey : String  = 'account'; // default

  accounts: Array<IAccount>;

  constructor(private accountSvc: AccountService) { }

  ngOnInit() {
    this.accounts = this.accountSvc.getAccounts();
  }

  sort<Array>(col: string){
    if (col !== this.sortKey){
      this.sortDir = true;
      this.sortKey = col;
    }else{
      this.sortDir = !this.sortDir;
      this.accounts.reverse();
      return;
    }

    this.accounts.sort((a, b)=>{
      let keya = a[col];
      let keyb = b[col];

      if(keya > keyb){ return 1; }
      if(keya < keyb){ return -1; }

      return 0;
    });
    return;
  }

  loadAll(){
    this.showLoader = false;
    this.accounts = this.accountSvc.getAllAccounts();
  }

}
