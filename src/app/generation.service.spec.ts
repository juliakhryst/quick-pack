import { TestBed } from '@angular/core/testing';

import { GenerationService } from './generation.service';

describe('GenerationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerationService = TestBed.get(GenerationService);
    expect(service).toBeTruthy();
  });
});
