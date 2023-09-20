import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCycleComponent } from './all-cycle.component';

describe('AllCycleComponent', () => {
  let component: AllCycleComponent;
  let fixture: ComponentFixture<AllCycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCycleComponent]
    });
    fixture = TestBed.createComponent(AllCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
