import { UserService } from "./user.service";
import { Test, TestingModule } from "@nestjs/testing";
import { UserEntity } from "./user.entity";

describe("UserService", () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService]
    }).compile();

    service = module.get <UserService>(UserService);

    const newUser = new UserEntity();
    newUser.name = "fumy";
    newUser.age = 25;
    await service.create(newUser);

    const newUser2 = new UserEntity();
    newUser2.name = "seungbeom";
    newUser2.age = 20;
    await service.create(newUser2);

    const arr = await service.findAll();
    console.log(arr);

  });
  it("should be defined", () => {
    expect(service).toBeDefined();
  });

});
