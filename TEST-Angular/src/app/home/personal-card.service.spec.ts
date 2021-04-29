import { TestBed } from '@angular/core/testing';

import { PersonalCardService } from './personal-card.service';

describe('PersonalCardService', () => {
  let service: PersonalCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
