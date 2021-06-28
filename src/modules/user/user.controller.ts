import { Controller, Get, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get("add")
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
