import {Component,OnInit,DoCheck,OnDestroy} from '@angular/core';
@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html' //Cargando el archivo html
})

export class VideoJuegoComponent implements OnInit,DoCheck,OnDestroy{ //Se asigna un nombre como el nombre de este archivo, pero en Camelcase
    public titulo: string;
    public listado: string;
    
    constructor(){
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de los juegos mas populares";
        //console.log('Se ha cargado el componente: videojuego.component.ts');
    }

    ngOnInit(){ //Se ejecutara despues del CONSTRUTOR
        //console.log("OnInit ejecutado");
    }

    ngDoCheck(){
        //console.log("DoCheck ejecutado");
    }
    ngOnDestroy(){
        //console.log("OnDestroy ejecutado");
    }

    //Ejemplo DoCheck
    cambiarTitulo(){
        this.titulo = "Nuevo tÃ­tulo del componente";
    }


}