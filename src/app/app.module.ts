import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//COMPONENTES
import { MenuflinkComponent } from './components/menuflink/menuflink.component';
import { SidebarflinkComponent } from './components/sidebarflink/sidebarflink.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuflinkComponent,
    SidebarflinkComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
