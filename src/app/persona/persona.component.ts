import { Component } from "@angular/core";

@Component({
    selector: "persona",
    templateUrl: "./persona.component.html"
})

export class PersonaComponent{
    public nombre:string;
    public apellido:string;
    public edad:number;
    public trabajos:Array<string>;

    //Para inicalizar la propiedades
    constructor(){
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
    ngOnInit(){
        this.message();

        //variable y sus alcances
        var uno = 5;
        var dos = 5;

        console.log("valor unicial de uno es: "+uno+"\n"+"valor inicial de dos es:"+dos);

        if (dos=uno) {

            let uno = 3;
            let dos = 4;

            console.log(dos+" no es igual que "+ uno);

            if (dos>uno) {
                console.log(dos+" es mayor que "+uno);
            }

            console.log("dentro de bloque: \n"+"valor de uno es: "+uno+"\n"+"valor de dos es:"+dos);

 
        }

        console.log("fuera del bloque: \n"+"valor de uno es: "+uno+"\n"+"valor de dos es:"+dos);

        //Nota: var funciona para declarar variables de forma global, let permite crear una variable
        //solo a nivel de bloque de codigo como lo puede ser una funcion o metodo, if statement, etc.
    }

    message(){
        alert(this.trabajos);
    }


}