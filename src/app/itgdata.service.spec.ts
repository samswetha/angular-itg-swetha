import { TestBed } from '@angular/core/testing';

import { ItgdataService } from './itgdata.service';

describe('ItgdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItgdataService = TestBed.get(ItgdataService);
    expect(service).toBeTruthy();
  });
});
