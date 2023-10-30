import { TestBed } from '@angular/core/testing';

import { TempoPipeService } from './tempo.pipe.service';

describe('TempoPipeService', () => {
  let service: TempoPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempoPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
