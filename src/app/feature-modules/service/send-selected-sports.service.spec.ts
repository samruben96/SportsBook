import { TestBed } from '@angular/core/testing';

import { SendSelectedSportsService } from './send-selected-sports.service';

describe('SendSelectedSportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendSelectedSportsService = TestBed.get(SendSelectedSportsService);
    expect(service).toBeTruthy();
  });
});
