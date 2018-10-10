import { Component } from "@angular/core";

@Component({
    selector: "empleado",
    templateUrl: "./empleado.component.html"
})

export class EmpleadoComponent{
    public nombreComponente="Empleado";
    public listadoEmpleado="empleado, empleado2, empleado3";

    //tipos de datos
    public name:string ="name example";
    public age:number =22;
    public mayorEdad:boolean = true;

    //crear Array de tipo string
    public trabajos:Array<string> = ["A","B","C","D"];

    //crear Array que acepta cualquier tipo con any
    public trabajos1:Array<any> = ["A","B","C","D"];

    EmpleadoComponent(){
        console.log(this.age);
        this.hi();
    }

    hi(){
        alert("rgrg");
    }
}