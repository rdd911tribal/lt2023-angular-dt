import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MydatatableModule } from './features/mydatatable/mydatatable.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MydatatableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
