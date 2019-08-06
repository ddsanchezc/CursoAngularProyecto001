import {Component,OnInit}  from '@angular/core';
//Importando clase 'Zapatilla'
import {Zapatilla} from '../models/zapatilla' /*'..' es para salir de carpeta 'zapatillas'*/

@Component({
   selector: 'zapatillas',//Etiqueta donde se cargaran los componentes
   templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{ //Para usar clase en otra componente
   public titulo:string;
   public zapatillas:Array<Zapatilla>;
   public marcas_zapatillas: Array<String>;

   constructor(){
      this.marcas_zapatillas = new Array();
      this.titulo = "Componente de zapatillas";
      /*se crea un objeto zapatilla a partir de la clase creada*/
      this.zapatillas = [
         new Zapatilla('Reebook Classic - 1','Reebook','Blanco',true,80),
         new Zapatilla('Reebook Spartan - 1','Reebook','Verde',true,95),
         new Zapatilla('Adidas Classic - 2','Adidas','Negro',false,70),
         new Zapatilla('Reebook Classic - 3','Reebook','Gris',true,120),
         new Zapatilla('Nike Classic - 4','Nike','Negro',true,90)
      ];
   }

   ngOnInit(){
      console.log(this.zapatillas);
      this.getMarcas(); //llamando a la funcion 'marcas' creada abajo
   }

   //uso del forEach (como alternativa al *ngFor)
   getMarcas(){
      this.zapatillas.forEach((elemento_zapatilla,index)=>{
         //Esta validacion hace que se muestre solo marcas diferentes
         if(this.marcas_zapatillas.indexOf(elemento_zapatilla.marca)<0){
            this.marcas_zapatillas.push(elemento_zapatilla.marca);
         }
      });
      console.log(this.marcas_zapatillas);
   }

}