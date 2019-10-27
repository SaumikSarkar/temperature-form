import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAmplificationFormComponent } from './step-amplification-form.component';

describe('StepAmplificationFormComponent', () => {
  let component: StepAmplificationFormComponent;
  let fixture: ComponentFixture<StepAmplificationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepAmplificationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepAmplificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
