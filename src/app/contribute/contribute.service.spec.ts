import { TestBed, inject } from '@angular/core/testing';

import { ContributeService } from './contribute.service';

describe('ContributeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContributeService]
    });
  });

  it('should be created', inject([ContributeService], (service: ContributeService) => {
    expect(service).toBeTruthy();
  }));
});
