import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeltFormComponent } from './melt-form.component';

describe('MeltFormComponent', () => {
  let component: MeltFormComponent;
  let fixture: ComponentFixture<MeltFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeltFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeltFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
