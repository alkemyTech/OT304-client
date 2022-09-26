import { TestBed } from '@angular/core/testing';

import { OrganizacionEditService } from './organizacion-edit.service';

describe('OrganizacionEditService', () => {
  let service: OrganizacionEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizacionEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
