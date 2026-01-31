import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WineList } from './wine-list';

describe('WineListComponent', () => {
  let component: WineList;
  let fixture: ComponentFixture<WineList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WineList], // standalone component goes here
    }).compileComponents();

    fixture = TestBed.createComponent(WineList);
    component = fixture.componentInstance;

    // ✅ Initialize wines BEFORE detectChanges to avoid ExpressionChangedAfterItHasBeenCheckedError
    component.wines = [
      { id: 1, name: 'Douro Reserva', region: 'Douro', year: 2020 },
      { id: 2, name: 'Alentejo Red', region: 'Alentejo', year: 2019 },
    ];

    fixture.detectChanges(); // first change detection sees the correct values
  });

  it('should display a list of wines', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Douro Reserva');
    expect(compiled.textContent).toContain('Alentejo Red');
  });
});
