import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Importar routing
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

//Componente creada --> videojuego.component.ts
//Modulo principal --> app.module.ts
//Importando componente creada en modulo principal
import { VideoJuegoComponent } from './videojuego/videojuego.component';

//Componente creada --> zapatilla.component.ts
//Modulo principal --> app.module.ts
//Importando componente creada en modulo principal
import { ZapatillasComponent } from './zapatillas/zapatillas.component';

//Componente creada mediante 'ng generate component'--> cursos.component.ts
import { CursosComponent } from './cursos/cursos.component';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent
    
    //Cargando directivas de componente creada 'videojuegos'
    , VideoJuegoComponent 

    //Cargando directivas de componente creada 'videojuegos'
    , ZapatillasComponent

    //Cargando directivas de componente creada 'videojuegos'
    , CursosComponent, HomeComponent

  ],
  imports: [
    BrowserModule
    // Cargando modulo 'FormsModule'
    , FormsModule
    // Cargando modulo 'routing'
    , routing
  ],
  providers: [
    // Aqui van los servicios
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
