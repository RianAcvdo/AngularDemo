var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var EmpleadoComponent = /** @class */ (function () {
    function EmpleadoComponent() {
        this.nombreComponente = "Empleado";
        this.listadoEmpleado = "empleado, empleado2, empleado3";
        //tipos de datos
        this.name = "name example";
        this.age = 22;
        this.mayorEdad = true;
        //crear Array de tipo string
        this.trabajos = ["A", "B", "C", "D"];
        //crear Array que acepta cualquier tipo con any
        this.trabajos1 = ["A", "B", "C", "D"];
    }
    EmpleadoComponent.prototype.EmpleadoComponent = function () {
        console.log(this.age);
        this.hi();
    };
    EmpleadoComponent.prototype.hi = function () {
        alert("rgrg");
    };
    EmpleadoComponent = __decorate([
        Component({
            selector: "empleado",
            templateUrl: "./empleado.component.html"
        })
    ], EmpleadoComponent);
    return EmpleadoComponent;
}());
export { EmpleadoComponent };
//# sourceMappingURL=empleado.component.js.map