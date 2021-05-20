import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createemployee } from 'src/app/shared/models/createemployee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private router: Router) { }

  createEmpl : createemployee = {name : '', password : ''};
  
  ngOnInit(): void {
    console.log("button clicked");
  }



}
