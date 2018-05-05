import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityCreateComponent } from './opportunity-create.component';

describe('OpportunityCreateComponent', () => {
  let component: OpportunityCreateComponent;
  let fixture: ComponentFixture<OpportunityCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
