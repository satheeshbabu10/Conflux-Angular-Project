import { TestBed } from '@angular/core/testing';

import { TeamPlannerService } from './team-planner.service';

describe('TeamPlannerService', () => {
  let service: TeamPlannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamPlannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
