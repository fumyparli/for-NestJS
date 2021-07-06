import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PhotometadataEntity} from "./photometadata.entity";
import {PhotometadataService} from "./photometadata.service";
import {PhotometadataController} from "./photometadata.controller";

@Module({
    imports: [TypeOrmModule.forFeature([PhotometadataEntity])],
    providers: [PhotometadataService],
    controllers: [PhotometadataController],
})

export class PhotometadataModule {
}