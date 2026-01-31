import { Component } from '@angular/core';
import { Wine } from '../model/wine';
import { CommonModule } from '@angular/common';
import { WineService } from '../service/wine.service';

@Component({
  selector: 'app-wine-list',
  imports: [CommonModule],
  templateUrl: './wine-list.html',
  styleUrl: './wine-list.css',
})
export class WineList {

  wines: Wine[] = [];

  constructor(private wineService: WineService){}

    ngOnInit(): void {
    this.wines = this.wineService.getWines();
  }
}
