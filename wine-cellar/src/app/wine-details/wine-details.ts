import { Component, OnInit } from '@angular/core';
import { Wine } from '../service/wine';
import { ActivatedRoute } from '@angular/router';
import { WineService } from '../service/wine.service';

@Component({
  selector: 'app-wine-details',
  imports: [],
  templateUrl: './wine-details.html',
  styleUrl: './wine-details.css',
})
export class WineDetails implements OnInit {

  wine!:Wine;

  constructor(private route: ActivatedRoute, private wineService:WineService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    
    this.wine=this.wineService.getWine(id);
  }
}
