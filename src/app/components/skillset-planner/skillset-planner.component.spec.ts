import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetPlannerComponent } from './skillset-planner.component';

describe('SkillsetPlannerComponent', () => {
  let component: SkillsetPlannerComponent;
  let fixture: ComponentFixture<SkillsetPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsetPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsetPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
