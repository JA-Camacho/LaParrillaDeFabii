import { TestBed } from '@angular/core/testing';

import { MenuDiaService } from './menu-dia.service';

describe('MenuDiaService', () => {
  let service: MenuDiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuDiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
