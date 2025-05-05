import { TestBed } from '@angular/core/testing';

import { PaymentFormDataService } from './payment-form-data.service';

describe('PaymentFormDataService', () => {
  let service: PaymentFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
