import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
@Component({
  selector: 'app-empleado2',
  templateUrl: './empleado2.component.html',
  styleUrls: ['./empleado2.component.css']
})
export class Empleado2Component implements OnInit {
  public titulo = 'Empleado';
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajador_externo: boolean;
  public color: string;
  public selectedcolor: string;
  constructor() {
    this.empleado = new Empleado('Rick', 22, 'Sofware Architect', false);
    this.trabajador_externo = false;
    this.color = 'blue'
    this.selectedcolor = '#ccc';
    this.trabajadores = [
      new Empleado('Rick0', 22, 'Sofware Architect0', true),
      new Empleado('Rick1', 22, 'Sofware Architect1', false),
      new Empleado('Rick2', 22, 'Sofware Architect2', true),
      new Empleado('Rick3', 22, 'Sofware Architect3', false)
    ];
  }

  ngOnInit() {
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarTipoEmpleado(param) {
    this.trabajador_externo = param
  }

}
