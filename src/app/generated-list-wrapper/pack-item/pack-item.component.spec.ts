import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackItemComponent } from './pack-item.component';

describe('PackItemComponent', () => {
  let component: PackItemComponent;
  let fixture: ComponentFixture<PackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
