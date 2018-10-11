var Empleado = /** @class */ (function () {
    //primera forma para declarar propiedades y construcor
    /*private nombre:string;
    private edad:number;
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }*/
    //segunda forma para declarar propiedades y construcor
    function Empleado(nombre, edad, cargo, contratado) {
        this.nombre = nombre;
        this.edad = edad;
        this.cargo = cargo;
        this.contratado = contratado;
    }
    return Empleado;
}());
export { Empleado };
//# sourceMappingURL=empleado.js.map