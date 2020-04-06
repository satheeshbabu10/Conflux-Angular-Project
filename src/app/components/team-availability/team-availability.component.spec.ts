import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAvailabilityComponent } from './team-availability.component';

describe('TeamAvailabilityComponent', () => {
  let component: TeamAvailabilityComponent;
  let fixture: ComponentFixture<TeamAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
