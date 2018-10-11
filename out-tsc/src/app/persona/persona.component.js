var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
var PersonaComponent = /** @class */ (function () {
    //Para inicalizar la propiedades
    function PersonaComponent() {
        this.nombre = "nombre";
        this.apellido = "apellido";
        this.edad = 4;
        this.trabajos = ["trabajos"];
    }
    /*
     constructor(nombre:string, apellido:string, edad:number, trabajos:Array<string>){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.trabajos = trabajos;
    }
    */
    //como buena practica usar ngOnInit para inicializar las funciones o metodos
    PersonaComponent.prototype.ngOnInit = function () {
        this.message();
        //variable y sus alcances
        var uno = 5;
        var dos = 5;
        console.log("valor unicial de uno es: " + uno + "\n" + "valor inicial de dos es:" + dos);
        if (dos = uno) {
            var uno_1 = 3;
            var dos_1 = 4;
            console.log(dos_1 + " no es igual que " + uno_1);
            if (dos_1 > uno_1) {
                console.log(dos_1 + " es mayor que " + uno_1);
            }
            console.log("dentro de bloque: \n" + "valor de uno es: " + uno_1 + "\n" + "valor de dos es:" + dos_1);
        }
        console.log("fuera del bloque: \n" + "valor de uno es: " + uno + "\n" + "valor de dos es:" + dos);
        //Nota: var funciona para declarar variables de forma global, let permite crear una variable
        //solo a nivel de bloque de codigo como lo puede ser una funcion o metodo, if statement, etc.
    };
    PersonaComponent.prototype.message = function () {
        alert(this.trabajos);
    };
    PersonaComponent = __decorate([
        Component({
            selector: "persona",
            templateUrl: "./persona.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], PersonaComponent);
    return PersonaComponent;
}());
export { PersonaComponent };
//# sourceMappingURL=persona.component.js.map