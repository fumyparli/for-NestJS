import { Test, TestingModule } from '@nestjs/testing';
import { PhotometadataService } from './photometadata.service';

describe('PhotometadataService', () => {
  let service: PhotometadataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotometadataService],
    }).compile();

    service = module.get<PhotometadataService>(PhotometadataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
