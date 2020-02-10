import { TestBed } from '@angular/core/testing';

import { ManageBookmarkService } from './manage-bookmark.service';

describe('ManageBookmarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageBookmarkService = TestBed.get(ManageBookmarkService);
    expect(service).toBeTruthy();
  });
});
