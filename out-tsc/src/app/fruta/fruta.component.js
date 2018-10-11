var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var FrutaComponent = /** @class */ (function () {
    function FrutaComponent() {
        this.nombre_componenten = 'Componente de frutas';
        this.lista_de_fruta = 'manzana, pera, limon, uva, tomate, piña';
    }
    FrutaComponent = __decorate([
        Component({
            selector: "fruta",
            //plantilla separada por ficheros en este claso el html del componente de fruta
            templateUrl: "./fruta.component.html"
            //este "template" representa una plantilla en linea
            /*template: `
            <h2>{{nombre_componenten}}</h2>
            <p>{{lista_de_fruta}}</p>
            `*/
        })
        //nuestra clase que representa el modelo de nuestro objeto fruta
    ], FrutaComponent);
    return FrutaComponent;
}());
export { FrutaComponent };
//# sourceMappingURL=fruta.component.js.map