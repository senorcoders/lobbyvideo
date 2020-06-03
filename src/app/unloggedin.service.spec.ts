import { TestBed } from '@angular/core/testing';

import { UnloggedinService } from './unloggedin.service';

describe('UnloggedinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnloggedinService = TestBed.get(UnloggedinService);
    expect(service).toBeTruthy();
  });
});
