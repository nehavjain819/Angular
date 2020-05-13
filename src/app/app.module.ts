import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Employee } from './Employee/employee';
import { EmployeeListComponent } from './Employee/employeeList.component';
import { EmployeeTitlePipe } from './Employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './Employee/employeeCount.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, Employee, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
