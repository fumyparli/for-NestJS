import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {getConnectionOptions} from "typeorm";
import {UserModule} from "./modules/user/user.module";
import {PhotoModule} from "./modules/photo/photo.module"
import {PhotometadataModule} from "./modules/photometadata/photometadata.module";

@Module({
    imports: [TypeOrmModule.forRootAsync({
        useFactory: async () => {
            return Object.assign(await getConnectionOptions(), {
                // can add options
            })
        }
    }), UserModule, PhotoModule, PhotometadataModule],
    controllers: [AppController],
    providers: [AppService]
})

export class AppModule {
}
