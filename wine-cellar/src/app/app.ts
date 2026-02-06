import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WineList } from "./wine-list/wine-list";
import { HttpClient, HttpContext } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    WineList ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  protected readonly title = signal('wine-cellar');
}
