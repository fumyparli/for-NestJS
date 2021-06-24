import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CatsModule} from "./modules/cats/cats.module";
import {CatsController} from "./modules/cats/cats.controller";

@Module({
    imports: [AppModule, CatsModule],
    controllers: [AppController, CatsController],
    providers: [AppService],
})
export class AppModule {
}
