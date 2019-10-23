import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStepAmplificationFormComponent } from './two-step-amplification-form.component';

describe('TwoStepAmplificationFormComponent', () => {
  let component: TwoStepAmplificationFormComponent;
  let fixture: ComponentFixture<TwoStepAmplificationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoStepAmplificationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoStepAmplificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
