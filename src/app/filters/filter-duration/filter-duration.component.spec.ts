import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDurationComponent } from './filter-duration.component';

describe('FilterDurationComponent', () => {
  let component: FilterDurationComponent;
  let fixture: ComponentFixture<FilterDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
