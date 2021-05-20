import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientserviceService } from 'src/app/core/services/clientservice.service';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  client: Client | undefined;
  constructor(private clientService: ClientserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.getClientDetails(id); 
  }

  private getClientDetails(id: number): void {
    this.clientService.getClientDetails(id)
      .subscribe(m => {
        this.client = m;
        console.log(m);
      });
  } 
}
