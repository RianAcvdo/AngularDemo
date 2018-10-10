import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing,appRoutingProviders } from './app.routing';//import para routing
import { HttpModule } from '@angular/http';//para ejercer peticiones http

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';//importamos nuestro componentes
import { EmpleadoComponent} from './empleado/empleado.component';
import { PersonaComponent } from './persona/persona.component';
import { AnimalComponent } from './animal/animal.component';
import { Empleado2Component } from './empleado2/empleado2.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ConversorPipe } from './customer-pipe/conversor-pipe';
import { FormulariosComponent } from './formularios/formularios.component';
import { PeticionesComponent } from './peticionhttp/peticiones.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { HijoComponent } from './hijo/hijo.component';
//aqui añadiremos los nuevos componentes que necesitaremos, en nuestro caso el componente fruta.component.ts
@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,//componente añadido
    EmpleadoComponent,
    PersonaComponent,
    AnimalComponent,
    Empleado2Component,
    HomeComponent,
    ContactComponent,
    ConversorPipe,
    FormulariosComponent,
    PeticionesComponent,
    PlantillaComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,//aqui añadimos el impor del HttpModule
    routing//impor para routing
  ],
  providers: [appRoutingProviders],//providers routing
  bootstrap: [AppComponent]
})
export class AppModule { }
