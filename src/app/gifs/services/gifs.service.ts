import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey      : string = 'uX1wDywugizwSBgATgx5AInarP7J97y0';
  private _historial  : string[] = [];

  public resultados: Gif [] = [];

  get historial (){
    
    return [...this._historial];
  }

  constructor( private http: HttpClient ) { 

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('ultimaBusqueda')!) || [];

   }

  buscarGifs( query: string ) {
    
    query = query.trim().toLocaleUpperCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial ));

    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=uX1wDywugizwSBgATgx5AInarP7J97y0&q=${query}&limit=10`)
      .subscribe ((respuesta) =>{
        console.log(respuesta.data)
        this.resultados = respuesta.data;
        localStorage.setItem('ultimaBusqueda', JSON.stringify(this.resultados ));
      })
    
  }

}
