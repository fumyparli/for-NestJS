import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TeamEntity } from "./team.entity";

@Injectable()
export class TeamService {
  constructor(@InjectRepository(TeamEntity) private readonly teamRepository: Repository<TeamEntity>) {
  }

  create({ name }: TeamEntity): Promise<TeamEntity> {
    return this.teamRepository.save({ name });
  }

  findAll(): Promise<TeamEntity[]> {
    return this.teamRepository.find();
  }

  findOne(id: number): Promise<TeamEntity> {
    return this.teamRepository.findOne(id);
  }

  update(id: number, { name }: TeamEntity): Promise<TeamEntity> {
    return this.teamRepository.save({ id, name });
  }

  async remove(id: number): Promise<number> {
    await this.teamRepository.delete(id);
    return id;
  }

}
