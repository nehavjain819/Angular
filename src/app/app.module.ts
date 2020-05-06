import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Employee } from './Employee/employee';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Employee ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
