import { TestBed } from '@angular/core/testing';

import { NoAuthGaurdService } from './no-auth-gaurd.service';

describe('NoAuthGaurdService', () => {
  let service: NoAuthGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoAuthGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
