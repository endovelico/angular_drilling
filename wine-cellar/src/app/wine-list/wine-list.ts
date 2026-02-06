import { Component } from '@angular/core';
import { Wine } from '../model/wine';
import { CommonModule } from '@angular/common';
import { WineService } from '../service/wine.service';
import { RouterModule } from '@angular/router'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wine-list',
  imports: [CommonModule,
            RouterModule
  ],
  templateUrl: './wine-list.html',
  styleUrl: './wine-list.css',
})
export class WineList {

  wines$!: Observable<Wine[]>;

  constructor(private wineService: WineService){}

    ngOnInit(): void {
    this.wines$ = this.wineService.getWines();
  }
}
