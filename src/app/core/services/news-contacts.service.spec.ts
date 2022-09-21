import { TestBed } from '@angular/core/testing';

import { NewsContactsService } from './news-contacts.service';

describe('NewsContactsService', () => {
  let service: NewsContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
