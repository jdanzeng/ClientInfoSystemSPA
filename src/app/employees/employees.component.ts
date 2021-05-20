import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/services/employee.service';
import { Employee } from '../shared/models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:Employee[] | undefined;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    
    this.employeeService.getAllEmployees().subscribe(
      e=>{ this.employees = e;}
    )
  }



}
