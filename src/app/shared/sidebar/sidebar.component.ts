import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styles: [],
    standalone: false
})
export class SidebarComponent {

  get historial(){
    return this.gifsService.historial;
  }

  constructor( private gifsService: GifsService) { }

  buscar( palabra : string){
    this.gifsService.buscarGifs(palabra);
  }

}
