import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginotpPage } from './loginotp.page';

describe('LoginotpPage', () => {
  let component: LoginotpPage;
  let fixture: ComponentFixture<LoginotpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginotpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
