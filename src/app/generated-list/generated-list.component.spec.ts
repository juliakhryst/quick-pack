import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedListComponent } from './generated-list.component';

describe('GeneratedListComponent', () => {
  let component: GeneratedListComponent;
  let fixture: ComponentFixture<GeneratedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
