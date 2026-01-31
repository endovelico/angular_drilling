import { Injectable } from '@angular/core';
import { Wine } from '../model/wine';
@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor() { }
  
  getWines(): Wine[] {
    return [
      { id: 1, name: 'Douro Reserva', region: 'Douro', year: 2020 },
      { id: 2, name: 'Alentejo Red', region: 'Alentejo', year: 2019 },
      { id: 3, name: 'Vinho Verde', region: 'Minho', year: 2021 }
    ];
  }
}