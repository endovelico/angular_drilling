import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WineDetails } from './wine-details';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Wine } from '../service/wine';


describe('WineDetailsComponent', () => {
  let component: WineDetails;
  let fixture: ComponentFixture<WineDetails>;
  const mockWineService = {
    getWine: (id: number) => ({ id, name: 'Test Wine', region: 'Test Region', year: 2020 })
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WineDetails],
      providers: [
        { provide: Wine, useValue: mockWineService },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(WineDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should display wine details', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test Wine');
    expect(compiled.textContent).toContain('Test Region');
    expect(compiled.textContent).toContain('2020');
  });
});