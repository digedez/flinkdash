import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { MenuflinkComponent } from './components/menuflink/menuflink.component';

@NgModule({
  declarations: [
    AppComponent, 
    MenuflinkComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
