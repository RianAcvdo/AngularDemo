import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//este fichero nos servira para configurar nuestro sistema de rutas
import {Empleado2Component} from './empleado2/empleado2.component'
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { PeticionesComponent } from './peticionhttp/peticiones.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { HijoComponent } from './hijo/hijo.component';


const appRoutes: Routes = [
    {
        path:'', 
        component:HomeComponent
    },
    {
        path: 'empleado', 
        component: Empleado2Component
    },
    {
        path: 'fruta', 
        component: FrutaComponent
    },
    {
        path: 'home', 
        component: HomeComponent
    },
    {
        path: 'formularios', 
        component: FormulariosComponent
    },
    {
        path: 'contacto', 
        component: ContactComponent
    },
    {
        path: 'contacto/:page', //puede recibir parametros
        component: ContactComponent
    },
    {
        path: 'peticiones', 
        component: PeticionesComponent
    },
    {
        path: 'plantilla', 
        component: PlantillaComponent
    },
    {
        path: 'compomente-hijo', 
        component: HijoComponent
    },
    {
        path:'**',
        component:HomeComponent
    }
];

export const appRoutingProviders: any []= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);