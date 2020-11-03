import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleParentComponent } from './life-cycle-parent.component';

describe('LifeCycleParentComponent', () => {
  let component: LifeCycleParentComponent;
  let fixture: ComponentFixture<LifeCycleParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
