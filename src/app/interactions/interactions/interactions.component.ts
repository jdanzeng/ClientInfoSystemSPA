import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { Interaction } from 'src/app/shared/models/interaction';

@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.css']
})
export class InteractionsComponent implements OnInit {

  interactions:Interaction[] | undefined;
  constructor(private interactionService: InteractionService) { }

  ngOnInit(): void {
    this.interactionService.getAllInteractions().subscribe(
      e=>{ this.interactions = e;}
    )
  }

}
