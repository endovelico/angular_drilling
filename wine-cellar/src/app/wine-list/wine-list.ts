import { Component } from '@angular/core';
import { Wine } from '../model/wine';
import { CommonModule, NgIf } from '@angular/common';
import { WineService } from '../service/wine.service';
import { RouterModule } from '@angular/router'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wine-list',
  standalone: true,
  imports: [CommonModule,
            RouterModule,
            NgIf],
  templateUrl: './wine-list.html',
  styleUrl: './wine-list.css',
})
export class WineList {

  wines: Wine[] = [];
  loading = true;

  constructor(private wineService: WineService){}

    ngOnInit(): void {

    this.wineService.getWines().subscribe(wines => {

      this.wines = wines;
      this.loading = false;
    });
  
  }
}
