import { TestBed } from '@angular/core/testing';

import { DotaApiService } from './dota-api.service';

describe('DotaApiService', () => {
  let service: DotaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
