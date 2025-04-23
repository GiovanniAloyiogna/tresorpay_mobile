import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaymentOptionComponent } from './payment-option.component';

describe('PaymentOptionComponent', () => {
  let component: PaymentOptionComponent;
  let fixture: ComponentFixture<PaymentOptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PaymentOptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
