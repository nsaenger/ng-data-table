import { TestBed } from '@angular/core/testing';

import { NgDataTableService } from './ng-data-table.service';

describe('NgDataTableService', () => {
  let service: NgDataTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDataTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
