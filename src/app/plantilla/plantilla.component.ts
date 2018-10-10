import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plantilla',
  templateUrl: "./plantilla.component.html"
})
export class PlantillaComponent implements OnInit {
  public titulo;
  public administrador

  public  dato_externo="Ricardo acevedo";
  public  identity = {
    id:"1",
    web:"somosbfends.com",
    tematica:"web development"
  };
  constructor() { 
    this.titulo = "Plantilla ngTemplate";
    this.administrador=true;
  }

  ngOnInit() {
  }

  cambioUsuario(value){
    this.administrador=value;
  }


    //------------------------------------------------------------------
    public datos_component_hijo;
    datoRecivido(event) {
      console.log(event);
      this.datos_component_hijo=event;
    }

}
