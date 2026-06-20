import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WineList } from './wine-list';
import { WineService } from '../service/wine.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
@Component({selector: 'app-dummy', template: ''})
class DummyComponent {}
describe('WineListComponent (async)', () => {
  let component: WineList;
  let fixture: ComponentFixture<WineList>;
  let mockService: any;
  beforeEach(waitForAsync(() => {
    mockService = {
      getWines: jasmine.createSpy().and.returnValue(of([
        { id: 1, name: 'Douro Reserva', region: 'Douro', year: 2020 },
        { id: 2, name: 'Alentejo Red', region: 'Alentejo', year: 2019 }
      ]))
    };
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [WineList, DummyComponent],
      providers: [
        { provide: WineService, useValue: mockService }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(WineList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should display wines from service', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Douro Reserva');
    expect(compiled.textContent).toContain('Alentejo Red');
  });
});