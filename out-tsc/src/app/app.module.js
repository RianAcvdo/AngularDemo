var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing'; //import para routing
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component'; //importamos nuestro componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { PersonaComponent } from './persona/persona.component';
import { AnimalComponent } from './animal/animal.component';
import { Empleado2Component } from './empleado2/empleado2.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
//aqui añadiremos los nuevos componentes que necesitaremos, en nuestro caso el componente fruta.component.ts
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                FrutaComponent,
                EmpleadoComponent,
                PersonaComponent,
                AnimalComponent,
                Empleado2Component,
                HomeComponent,
                ContactComponent,
                ServicesComponent,
            ],
            imports: [
                BrowserModule,
                FormsModule,
                routing //impor para routing
            ],
            providers: [appRoutingProviders],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map