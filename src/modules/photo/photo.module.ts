import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PhotoEntity} from "./photo.entity";
import {PhotoService} from "./photo.service";
import {PhotoController} from "./photo.controller";

@Module({
    imports: [TypeOrmModule.forFeature([PhotoEntity])],
    providers: [PhotoService],
    controllers: [PhotoController],
})

export class PhotoModule {
}