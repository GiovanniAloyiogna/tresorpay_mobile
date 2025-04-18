import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorformPage } from './sectorform.page';

describe('SectorformPage', () => {
  let component: SectorformPage;
  let fixture: ComponentFixture<SectorformPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
