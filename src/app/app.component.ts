import { Component } from '@angular/core';

// ╔═╗╔═╗╦═╗╦  ╦╦╔═╗╔═╗╔═╗
// ╚═╗║╣ ╠╦╝╚╗╔╝║║  ║╣ ╚═╗
// ╚═╝╚═╝╩╚═ ╚╝ ╩╚═╝╚═╝╚═╝
import { AccountService } from './services/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Stock Viewer';
  accounts = this.accSvc.getAccounts();

  constructor(private accSvc: AccountService) { }

}
