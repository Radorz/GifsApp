import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { GifspageComponent } from '../gifspage/gifspage.component';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent  {

  get resultados (){

    return this.gifsService.resultado;
  }

 constructor ( private gifsService: GifsService){}

}
