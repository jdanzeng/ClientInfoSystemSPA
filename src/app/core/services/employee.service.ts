import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private apiservice:ApiService) { }

  getAllEmployees() : Observable<Employee[]>
  {
    return this.apiservice.getList('employees');  
  }

  getEmployeeDetails(id:number) : Observable<Employee>
{
  return this.apiservice.getOne(`${'employees/'}${id}`);
}
}
