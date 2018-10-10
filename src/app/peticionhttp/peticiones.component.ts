import { Component, OnInit } from '@angular/core';
import { PeticionesHttpServices } from '../services/peticiones.service';

@Component({
  selector: 'peticiones',
  templateUrl: "./peticiones.component.html",
  providers: [PeticionesHttpServices]
})
export class PeticionesComponent implements OnInit {
  public articulos;
  constructor(private ps: PeticionesHttpServices) { }

  ngOnInit() {
    console.info(this.ps.getPrueba());
    this.ps.getArticulos().subscribe(
      result => {
        this.articulos = result;
        if(!this.articulos){
          console.log("Error en el servicio");
        }
        console.log(result);
      },
      error => {
        var errmsg = <any>error
        console.error(errmsg);
      }
    );
  }
}