import { TestBed } from '@angular/core/testing';

import { SportListDataService } from './sport-list-data.service';

describe('SportListDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportListDataService = TestBed.get(SportListDataService);
    expect(service).toBeTruthy();
  });
});
