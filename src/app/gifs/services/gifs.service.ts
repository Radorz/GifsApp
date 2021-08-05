import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, JsonpClientBackend} from '@angular/common/http';
import { gif, SearchGiftsResponse } from '../interfaces/searchgiftsresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = 'DceggIbm3yPmS7qBqO1pTQQ5VhXWwUHF';
  private url : string ="https://api.giphy.com/v1/gifs";
 private _historial: string[]=[];
 public resultado : gif []= [];

 get historial (){

  return [...this._historial];
 }

 constructor(private http : HttpClient){

    this._historial = JSON.parse(localStorage.getItem('Historial')!) || [];
    this.resultado = JSON.parse(localStorage.getItem('resultado')!) || [];

 };

  buscargifts(termino: string = ''){

  termino= termino.trim().toLowerCase();
  if(!this._historial.includes(termino)){
    this._historial.unshift(termino);

    this._historial=this._historial.splice(0,10);

    localStorage.setItem('Historial', JSON.stringify(this._historial));

    console.log(this._historial);
  }

  const pararms = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', termino);

   this.http.get<SearchGiftsResponse>(`${this.url}/search?`,{ params: pararms }).
   subscribe((resp) =>{
     console.log(resp.data);
     this.resultado = resp.data;
    localStorage.setItem('resultado', JSON.stringify(this.resultado));

   })

  /*const resp =  await fetch('https://api.giphy.com/v1/gifs/search?api_key=DceggIbm3yPmS7qBqO1pTQQ5VhXWwUHF&q=sexy&limit=10');
  const data = await resp.json();
  console.log(data);*/
 }
}
