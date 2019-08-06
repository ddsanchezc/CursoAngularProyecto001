import { Component } from '@angular/core';
//importando variable 'Configuracion'
import { Configuracion } from './models/configuracion'  ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'CursoAngular';
  public descripcion:string;
  public mostrar_videojuegos: boolean = true;
  public Config;

  constructor(){
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.Config = Configuracion;
  }

  ocultarVideoJuegos(value){
    this.mostrar_videojuegos = value;
  }
}
