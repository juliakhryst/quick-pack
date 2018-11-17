import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterActivitiesComponent } from './filter-activities.component';

describe('FilterActivitiesComponent', () => {
  let component: FilterActivitiesComponent;
  let fixture: ComponentFixture<FilterActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
