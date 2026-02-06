import { TestBed } from '@angular/core/testing';
import { WineService } from './wine.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Wine } from '../service/wine';

describe('WineService (HTTP)', () => {
  
  let service: WineService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WineService]
    
    });

    service = TestBed.inject(WineService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should fetch wines from API', () => {
    const mockWines: Wine[] = [
      { id: 1, name: 'Douro Reserva', region: 'Douro', year: 2020 },
      { id: 2, name: 'Alentejo Red', region: 'Alentejo', year: 2019 }
    ];

    
    service.getWines().subscribe(wines => {
      expect(wines.length).toBe(2);
      expect(wines).toEqual(mockWines);
    });

    const req = httpMock.expectOne('/api/wines');
    expect(req.request.method).toBe('GET');
    req.flush(mockWines);
  });

});