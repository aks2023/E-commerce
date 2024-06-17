import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authSellarGuard } from './auth-sellar.guard';

describe('authSellarGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authSellarGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
