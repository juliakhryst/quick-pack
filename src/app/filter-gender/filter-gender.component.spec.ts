import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGenderComponent } from './filter-gender.component';

describe('FilterGenderComponent', () => {
  let component: FilterGenderComponent;
  let fixture: ComponentFixture<FilterGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
