import { TestBed, inject } from '@angular/core/testing';

import { ArticalesService } from './articales.service';

describe('ArticalesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticalesService]
    });
  });

  it('should be created', inject([ArticalesService], (service: ArticalesService) => {
    expect(service).toBeTruthy();
  }));
});
