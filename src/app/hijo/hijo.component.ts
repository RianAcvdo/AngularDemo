import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'componente-hijo',
  templateUrl: './hijo.component.html',
})

export class HijoComponent {
  public title;
  // con @Input('') podemos redescribir le metodo y definimos que un propiedad pueve enviar datos a otro componente
  @Input('texto1') propiedad_uno: string;
  @Input('texto2') propiedad_dos: string;

  @Output() propiedad_uno_hijo = new EventEmitter();

  constructor() {
    this.title = "componente hijo"
  }

  ngOnInit() {
    console.log(this.propiedad_uno);
    console.log(this.propiedad_dos);
  }

  enviar() {
    this.propiedad_uno_hijo.emit({
      id: "1",
      nombre: "Ricardo Acevedo",
      web: "somosbfends.com",
      tematica: "web development"
    })
  }
}
