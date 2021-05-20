import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './admin/create-client/create-client.component';
import { CreateEmployeeComponent } from './admin/create-employee/create-employee.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientsComponent } from './clients/clients/clients.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { InteractionsComponent } from './interactions/interactions/interactions.component';

const routes: Routes = 
[
  { path: "employees/:id", component: EmployeeDetailsComponent },
  { path: "", component: HomeComponent },
  {path: "clients/:id", component: ClientDetailsComponent},
  {path: "createemployee", component: CreateEmployeeComponent },
  {path: "createclient", component: CreateClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
