import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifspageComponent } from './gifspage/gifspage.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    GifspageComponent,
    BusquedaComponent,
    ResultadoComponent
  ],exports:[
    GifspageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
