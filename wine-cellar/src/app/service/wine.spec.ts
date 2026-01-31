import { TestBed } from '@angular/core/testing';
import { WineService } from './wine.service';
import { Wine } from '../model/wine';
import { WineList } from '../wine-list/wine-list';

describe('WineService', () => {

  let service: WineService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineService);
  });
  
  it('should return a list of wines', () => {
    const wines: Wine[] = service.getWines();
    expect(wines.length).toBeGreaterThan(0);
    expect(wines[0]).toHaveProperty('name');
    expect(wines[0]).toHaveProperty('region');
  });


  it('should get wines from WineService', () => {
  const fixture = TestBed.createComponent(WineList);
  const component = fixture.componentInstance;
  const service = TestBed.inject(WineService);
  const wines = service.getWines();
  component.wines = wines;
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.textContent).toContain('Douro Reserva');
  expect(compiled.textContent).toContain('Vinho Verde');
  });

});