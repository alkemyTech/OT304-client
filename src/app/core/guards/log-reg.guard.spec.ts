import { TestBed } from '@angular/core/testing';

import { LogRegGuard } from './log-reg.guard';

describe('LogRegGuard', () => {
  let guard: LogRegGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogRegGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
