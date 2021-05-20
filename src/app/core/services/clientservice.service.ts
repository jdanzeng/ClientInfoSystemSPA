import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {

  constructor(private apiservice:ApiService) { }

  getAllClients() : Observable<Client[]>
  {
    return this.apiservice.getList('Clients');  
  }

  getClientDetails(id:number) : Observable<Client>
{
  return this.apiservice.getOne(`${'Clients/'}${id}`);
}
}
