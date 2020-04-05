import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPlannerComponent } from './team-planner.component';

describe('TeamPlannerComponent', () => {
  let component: TeamPlannerComponent;
  let fixture: ComponentFixture<TeamPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
