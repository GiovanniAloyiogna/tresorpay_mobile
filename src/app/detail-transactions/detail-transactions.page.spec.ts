import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailTransactionsPage } from './detail-transactions.page';

describe('DetailTransactionsPage', () => {
  let component: DetailTransactionsPage;
  let fixture: ComponentFixture<DetailTransactionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTransactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
