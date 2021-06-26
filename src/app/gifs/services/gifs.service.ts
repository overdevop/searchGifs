import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey      : string = 'uX1wDywugizwSBgATgx5AInarP7J97y0';
  private _historial  : string[] = [];

  // TODO: Cambiar any por su tipo correspondiente //
  public resultados: any [] = [];

  get historial (){
    
    return [...this._historial];
  }

  constructor( private http: HttpClient ) { }

  buscarGifs( query: string ) {
    
    query = query.trim().toLocaleUpperCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=uX1wDywugizwSBgATgx5AInarP7J97y0&q=${query}&limit=10`)
      .subscribe ((respuesta:any) =>{
        console.log(respuesta.data)
        this.resultados = respuesta.data;
      })
    
  }

}
