import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';//para configurar las rutas
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public params:Params;

  constructor(
    private router:Router,
    private activateRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.forEach((params:Params)=>{
      this.params=params['page']//asignamos la varible que optine en la url :page
    });

  }

  redirigir(){
    this.router.navigate(['/contacto','no soy de ARENA'])//para redirigir con parametros
  }

  redirigirHome(params){
    this.router.navigate(['/home'])//para redirigir a la pagina home
  }
}
