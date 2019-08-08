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
   public color:string;
   public mi_marca:string;

   constructor(){
      this.mi_marca = "fila"
      this.color = 'red';
      this.marcas_zapatillas = new Array();
      this.titulo = "Componente de zapatillas";
      /*se crea un objeto zapatilla a partir de la clase creada*/
      this.zapatillas = [
         new Zapatilla('Reebook Classic','Reebook','Blanco',true,80),
         new Zapatilla('Reebook Spartan','Reebook','Verde',true,95),
         new Zapatilla('Adidas Classic','Adidas','Negro',false,70),
         new Zapatilla('Reebook B','Reebook','Gris',true,120),
         new Zapatilla('Nike Classic','Nike','Negro',true,90)
      ];
   }

   ngOnInit(){
      console.log(this.zapatillas);
      this.getMarcas(); // llamando a la funcion 'marcas' creada abajo
   }

   // uso del forEach (como alternativa al *ngFor)
   getMarcas(){
      this.zapatillas.forEach((elemento_zapatilla , index) => {
         // Esta validacion hace que se muestre solo marcas diferentes
         if (this.marcas_zapatillas.indexOf(elemento_zapatilla.marca) < 0) {
            this.marcas_zapatillas.push(elemento_zapatilla.marca);
         }
      });
      console.log(this.marcas_zapatillas);
   }

   getMarca(){
      alert(this.mi_marca);
   }

   addMarca(){
      this.marcas_zapatillas.push(this.mi_marca);
   }

   borrarMarca(indice){
      // delete this.marcas_zapatillas[indice];
      this.marcas_zapatillas.splice(indice,1); // Recibe parametro indice y 1 elemento a eliminar
   }
   
   onBlur(){
      console.log("Has salido del input :v");
   }

   mostrarPalabra(){
      alert(this.mi_marca);
   }

}