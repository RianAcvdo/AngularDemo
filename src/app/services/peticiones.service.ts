import { Injectable } from '@angular/core';
import { Http , Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesHttpServices {
    public url: string;
    constructor(private _http:Http) {
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba() {
        return "Hola mundo";
    }

    getArticulos() {
        //sintaxis this.variablehttp.metododepeticion(url a utilizar)
        return this._http.get(this.url).pipe(map(res => res.json()));
    }
}