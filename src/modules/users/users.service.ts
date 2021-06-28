import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {users} from "./users.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(users) private usersRepository: Repository<users>) {
        this.usersRepository = usersRepository;
    }

    findAll(): Promise<users[]> {
        return this.usersRepository.find();
    }

    async saveUser(user: users): Promise<void> {
        await this.usersRepository.save(user);
    }
}
