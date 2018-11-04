import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDestinationComponent } from './filter-destination.component';

describe('FilterDestinationComponent', () => {
  let component: FilterDestinationComponent;
  let fixture: ComponentFixture<FilterDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
