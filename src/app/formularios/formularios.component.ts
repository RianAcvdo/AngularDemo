import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { CocheService } from '../services/coche.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'],
  providers: [CocheService]
})

export class FormulariosComponent implements OnInit {
  public car: Coche;
  public cars: Coche[];
  
  constructor(
    private cocheService: CocheService,
    
  ) {

    this.car = new Coche("", "", "");
  }

  ngOnInit() {
    this.fillList();
  }

  onSubmit() {
    this.add();
  }

  fillList() {
    this.cars = this.cocheService.getCoche();
  }

  add() {
    this.cocheService.addCoche(this.car);
    this.car = new Coche("", "", "");
  }

  delete(index: number) {
    this.cocheService.deleteCoche(index);
  }

}

