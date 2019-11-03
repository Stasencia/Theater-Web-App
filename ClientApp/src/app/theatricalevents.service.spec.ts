import { TestBed } from '@angular/core/testing';

import { TheatricaleventsService } from './theatricalevents.service';

describe('TheatricaleventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TheatricaleventsService = TestBed.get(TheatricaleventsService);
    expect(service).toBeTruthy();
  });
});
