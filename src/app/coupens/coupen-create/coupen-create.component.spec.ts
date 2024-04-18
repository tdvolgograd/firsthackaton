import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupenCreateComponent } from './coupen-create.component';

describe('CoupenCreateComponent', () => {
  let component: CoupenCreateComponent;
  let fixture: ComponentFixture<CoupenCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoupenCreateComponent]
    });
    fixture = TestBed.createComponent(CoupenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
