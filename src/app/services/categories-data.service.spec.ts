import { TestBed } from '@angular/core/testing';

import { CategoriesDataService } from './categories-data.service';

describe('CategoriesDataService', () => {
  let service: CategoriesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
