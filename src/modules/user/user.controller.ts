import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserEntity} from "./user.entity";

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post('add')
    async create_post(@Body() body: any) {
        console.log(body);
        const newUser: UserEntity = new UserEntity();
        newUser.name = body.name;
        newUser.age = +(body.age);
        return await this.userService.create(newUser);
    }

    @Get('add')
    async create(@Query() query: any) {
        console.log(query.name, query.age);
        const newUser: UserEntity = new UserEntity();
        newUser.name = query.name;
        newUser.age = +(query.age);
        console.log(newUser);

        return await this.userService.create(newUser);
    }

    @Get()
    async findAll(): Promise<UserEntity[]> {
        const arr = await this.userService.findAll();
        return arr;
    }
}
