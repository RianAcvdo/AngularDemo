var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var RopaService = /** @class */ (function () {
    function RopaService() {
    }
    /*serviceTest(param){
        return param
    }*/
    //ejercicio collecion de ropa
    RopaService.prototype.addRopa = function (param) {
        this.colleccionRopa.push(param);
        return this.getRopa();
    };
    RopaService.prototype.getRopa = function () {
        return this.colleccionRopa;
    };
    RopaService = __decorate([
        Injectable()
    ], RopaService);
    return RopaService;
}());
export { RopaService };
//# sourceMappingURL=ropa.service.js.map