import { TestBed, inject } from '@angular/core/testing';

import { DataSenderService } from './data-sender.service';

describe('DataSenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSenderService]
    });
  });

  it('should be created', inject([DataSenderService], (service: DataSenderService) => {
    expect(service).toBeTruthy();
  }));
});
