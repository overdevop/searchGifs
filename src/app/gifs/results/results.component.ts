import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styles: [],
    standalone: false
})
export class ResultsComponent {


  get resultados(){
    return this.gisfService.resultados;
  }

  constructor( private gisfService : GifsService) { }


}
