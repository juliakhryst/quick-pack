import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedListWrapperComponent } from './generated-list-wrapper.component';

describe('GeneratedListWrapperComponent', () => {
  let component: GeneratedListWrapperComponent;
  let fixture: ComponentFixture<GeneratedListWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedListWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
