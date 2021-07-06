import { Test, TestingModule } from '@nestjs/testing';
import { PhotometadataController } from './photometadata.controller';

describe('PhotometadataController', () => {
  let controller: PhotometadataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotometadataController],
    }).compile();

    controller = module.get<PhotometadataController>(PhotometadataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
