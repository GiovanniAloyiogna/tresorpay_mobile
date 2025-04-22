import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationPaiementPage } from './validation-paiement.page';

describe('ValidationPaiementPage', () => {
  let component: ValidationPaiementPage;
  let fixture: ComponentFixture<ValidationPaiementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationPaiementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
