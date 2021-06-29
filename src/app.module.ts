import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import { TeamModule } from "./modules/team/team.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [UserModule, TeamModule, TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "fumyparli",
    database: "test",
    entities: [__dirname + "/modules/**/*.entity{.ts,.js}"],
    synchronize: true
  }), TeamModule],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {
}
