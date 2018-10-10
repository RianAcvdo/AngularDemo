export class Empleado{

    //primera forma para declarar propiedades y construcor
    /*private nombre:string;
    private edad:number;
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }*/

    //segunda forma para declarar propiedades y construcor
    constructor(public nombre:string,public edad:number,public cargo:string, public contratado:boolean){}
}