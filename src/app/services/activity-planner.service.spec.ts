import { TestBed } from '@angular/core/testing';

import { ActivityPlannerService } from './activity-planner.service';

describe('ActivityPlannerService', () => {
  let service: ActivityPlannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityPlannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
