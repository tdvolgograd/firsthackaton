import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupenDeleteComponent } from './coupen-delete.component';

describe('CoupenDeleteComponent', () => {
  let component: CoupenDeleteComponent;
  let fixture: ComponentFixture<CoupenDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoupenDeleteComponent]
    });
    fixture = TestBed.createComponent(CoupenDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
