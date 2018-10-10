import { Injectable } from '@angular/core';


@Injectable()
export class RopaService {
    public colleccionRopa: Array<String>;
    //ejercicio collecion de ropa

    constructor(){
        this.colleccionRopa=[];
    }
    
    addRopa(param: String): Array<String>{
        this.colleccionRopa.push(param);
        return this.getRopa();
    }

    deleteRopa(index: number) {
        this.colleccionRopa.splice(index, 1);
        return this.getRopa();
    }
    getRopa(): Array<String>{
        return this.colleccionRopa;
    }

}