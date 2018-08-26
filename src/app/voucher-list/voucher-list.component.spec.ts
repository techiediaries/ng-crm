import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherListComponent } from './voucher-list.component';

describe('VoucherListComponent', () => {
  let component: VoucherListComponent;
  let fixture: ComponentFixture<VoucherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
