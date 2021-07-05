import { TestBed } from '@angular/core/testing';

import { CheckUserLoginService } from './check-user-login.service';

describe('CheckUserLoginService', () => {
  let service: CheckUserLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckUserLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
