import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interaction } from 'src/app/shared/models/interaction';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor(private apiservice:ApiService) { }

  getAllInteractions() : Observable<Interaction[]>
  {
    return this.apiservice.getList('interactions');  
  }

}
