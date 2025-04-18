import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentmeduimsPage } from './paymentmeduims.page';

describe('PaymentmeduimsPage', () => {
  let component: PaymentmeduimsPage;
  let fixture: ComponentFixture<PaymentmeduimsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmeduimsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
