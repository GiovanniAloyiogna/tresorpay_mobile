import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstscreenPage } from './firstscreen.page';

describe('FirstscreenPage', () => {
  let component: FirstscreenPage;
  let fixture: ComponentFixture<FirstscreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
