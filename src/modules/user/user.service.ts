import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UserEntity} from "./user.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
  }

  create({ name, age }: UserEntity): Promise<UserEntity> {
    return this.userRepository.save({ name, age });
  }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }

  update(id: string, { name }: UserEntity): Promise<UserEntity> {
    return this.userRepository.save({ id, name });
  }

  async remove(id: number): Promise<number> {
    await this.userRepository.delete(id);
    return id;
  }

}
