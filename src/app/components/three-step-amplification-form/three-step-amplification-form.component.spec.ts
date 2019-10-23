import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeStepAmplificationFormComponent } from './three-step-amplification-form.component';

describe('ThreeStepAmplificationFormComponent', () => {
  let component: ThreeStepAmplificationFormComponent;
  let fixture: ComponentFixture<ThreeStepAmplificationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeStepAmplificationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeStepAmplificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
