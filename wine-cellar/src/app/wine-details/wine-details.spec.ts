import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineDetails } from './wine-details';

describe('WineDetails', () => {
  let component: WineDetails;
  let fixture: ComponentFixture<WineDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WineDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WineDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
