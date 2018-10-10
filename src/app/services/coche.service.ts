import { Injectable } from '@angular/core';
import { Coche } from '../formularios/coche';

@Injectable()
export class CocheService {
    public colleccionCoche: Array<Coche>;

    constructor(){
        this.colleccionCoche=[];
    }
    
    addCoche(param: Coche){
        this.colleccionCoche.push(param);
    }

    deleteCoche(index: number) {
        this.colleccionCoche.splice(index, 1);
        return this.getCoche();
    }
    getCoche(): Array<Coche>{
        return this.colleccionCoche;
    }

}