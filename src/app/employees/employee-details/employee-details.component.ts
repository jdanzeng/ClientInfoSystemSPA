import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  
  employee : Employee | undefined;
  constructor(private employeeService:EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void{  
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.getEmployeeDetails(id); 
    
  }
  
  private getEmployeeDetails(id: number): void {
    this.employeeService.getEmployeeDetails(id)
      .subscribe(m => {
        this.employee = m;
        console.log(m);
      });
  }  
    
}
