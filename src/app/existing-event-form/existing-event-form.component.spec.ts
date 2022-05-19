import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingEventFormComponent } from './existing-event-form.component';

describe('ExistingEventFormComponent', () => {
  let component: ExistingEventFormComponent;
  let fixture: ComponentFixture<ExistingEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingEventFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
