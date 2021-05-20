import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { HeaderComponent } from './core/layout/header/header.component';
import {NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { TablesComponent } from './shared/components/tables/tables.component';
import { ClientsComponent } from './clients/clients/clients.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import {CreateEmployeeComponent} from './admin/create-employee/create-employee.component';
import { InteractionsComponent } from './interactions/interactions/interactions.component';
import { CreateClientComponent } from './admin/create-client/create-client.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HeaderComponent,
    EmployeeDetailsComponent,
    TablesComponent,
    ClientsComponent,
    ClientDetailsComponent,
    CreateEmployeeComponent,
    InteractionsComponent,
    CreateClientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbDropdownModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
