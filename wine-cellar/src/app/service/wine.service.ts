import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wine } from '../model/wine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http: HttpClient) { }

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>('/api/wines');
  }

  getWine(id: number): Observable<Wine> {
    return this.http.get<Wine>(`/api/wines/${id}`);
  }
}