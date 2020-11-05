import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// ╔═╗╔═╗╦═╗╦  ╦╦╔═╗╔═╗╔═╗
// ╚═╗║╣ ╠╦╝╚╗╔╝║║  ║╣ ╚═╗
// ╚═╝╚═╝╩╚═ ╚╝ ╩╚═╝╚═╝╚═╝
import { AccountService } from './services/account.service';

// ╔═╗┌─┐┌┬┐┌─┐┌─┐┌┐┌┌─┐┌┐┌┌┬┐┌─┐
// ║  │ ││││├─┘│ ││││├┤ │││ │ └─┐
// ╚═╝└─┘┴ ┴┴  └─┘┘└┘└─┘┘└┘ ┴ └─┘
import { ViewerComponent } from './viewer/viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
