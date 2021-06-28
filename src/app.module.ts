import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MenusModule} from './modules/menus/menus.module';
import {RestsModule} from './modules/rests/rests.module';
import {UsersModule} from './modules/users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [AppModule, MenusModule, RestsModule, UsersModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'fumyparli',
        database: 'test',
        entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
        synchronize: true,
    })],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
}
