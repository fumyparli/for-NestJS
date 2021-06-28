import { Module } from '@nestjs/common';
import { RestsController } from './rests.controller';

@Module({
  controllers: [RestsController]
})
export class RestsModule {}
