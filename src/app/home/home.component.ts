import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';//importamos el servicio

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService] //asignamos el servicio como providers
})
export class HomeComponent implements OnInit {

  public listaRopa: String[];
  public ropaGuardar: String;
  public fecha; //para el ejercicio de pipes vamos a utilizar fechas

  constructor(
    private ropaService: RopaService //inyectamos 
  ) { 
    this.fecha = new Date();//inicializamos la variable fecha
  }

  ngOnInit() {
    this.listaRopa = this.ropaService.getRopa();
  }

  delete(index: number) {
    this.ropaService.deleteRopa(index)
  }

  add() {
    this.ropaService.addRopa(this.ropaGuardar);
    this.ropaGuardar = null;
  }
}
