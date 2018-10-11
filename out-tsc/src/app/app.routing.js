import { RouterModule } from '@angular/router';
//este fichero nos servira para configurar nuestro sistema de rutas
import { Empleado2Component } from './empleado2/empleado2.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
var appRoutes = [
    {
        path: '',
        component: HomeComponent
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
        path: 'contacto',
        component: ContactComponent
    },
    {
        path: 'contacto/:page',
        component: ContactComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];
export var appRoutingProviders = [];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map