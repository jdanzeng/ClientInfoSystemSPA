import { Component, OnInit } from '@angular/core';
import { ClientserviceService } from 'src/app/core/services/clientservice.service';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:Client[] | undefined;
  constructor(private clientService: ClientserviceService ) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(
      e=>{ this.clients = e;}
    )
  }

}
