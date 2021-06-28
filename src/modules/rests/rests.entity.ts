import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {users} from "../users/users.entity";

@Entity()
export class rests {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    menu_id: number;

    @OneToOne(type => users, users => users.id)
    @JoinColumn()
    users: users;
}