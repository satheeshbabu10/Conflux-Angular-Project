import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPlannerComponent } from './activity-planner.component';

describe('ActivityPlannerComponent', () => {
  let component: ActivityPlannerComponent;
  let fixture: ComponentFixture<ActivityPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
