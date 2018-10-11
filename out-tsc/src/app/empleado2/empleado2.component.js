var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Empleado } from './empleado';
var Empleado2Component = /** @class */ (function () {
    function Empleado2Component() {
        this.titulo = 'Empleado';
        this.empleado = new Empleado('Rick', 22, 'Sofware Architect', false);
        this.trabajador_externo = false;
        this.color = 'blue';
        this.selectedcolor = '#ccc';
        this.trabajadores = [
            new Empleado('Rick0', 22, 'Sofware Architect0', true),
            new Empleado('Rick1', 22, 'Sofware Architect1', false),
            new Empleado('Rick2', 22, 'Sofware Architect2', true),
            new Empleado('Rick3', 22, 'Sofware Architect3', false)
        ];
    }
    Empleado2Component.prototype.ngOnInit = function () {
        console.log(this.empleado);
        console.log(this.trabajadores);
    };
    Empleado2Component.prototype.cambiarTipoEmpleado = function (param) {
        this.trabajador_externo = param;
    };
    Empleado2Component = __decorate([
        Component({
            selector: 'app-empleado2',
            templateUrl: './empleado2.component.html',
            styleUrls: ['./empleado2.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], Empleado2Component);
    return Empleado2Component;
}());
export { Empleado2Component };
//# sourceMappingURL=empleado2.component.js.map