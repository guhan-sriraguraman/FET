import { TestBed } from '@angular/core/testing';

import { StuserviceService } from './stuservice.service';

describe('StuserviceService', () => {
  let service: StuserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StuserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
