import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TeamEntity } from "../team/team.entity";

@Entity()

export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @ManyToOne(type => TeamEntity)
  @JoinColumn({ name: "team_id" })
  team: TeamEntity;
}

