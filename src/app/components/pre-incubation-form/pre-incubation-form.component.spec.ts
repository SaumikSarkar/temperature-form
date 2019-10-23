import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreIncubationFormComponent } from './pre-incubation-form.component';

describe('PreIncubationFormComponent', () => {
  let component: PreIncubationFormComponent;
  let fixture: ComponentFixture<PreIncubationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreIncubationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreIncubationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
