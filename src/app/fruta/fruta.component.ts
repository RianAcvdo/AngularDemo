import { Component } from "@angular/core";
@Component({
    selector: "fruta",

    //plantilla separada por ficheros en este claso el html del componente de fruta
    templateUrl:"./fruta.component.html"

    //este "template" representa una plantilla en linea
    /*template: `
    <h2>{{nombre_componenten}}</h2>
    <p>{{lista_de_fruta}}</p>
    `*/
})

//nuestra clase que representa el modelo de nuestro objeto fruta
export class FrutaComponent{
    public nombre_componenten='Componente de frutas';
    public lista_de_fruta='manzana, pera, limon, uva, tomate, piña';
}