import {Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {menus} from "../menus/menus.entity";
import {rests} from "../rests/rests.entity";

@Entity()
export class users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    rest_id: number;

    @OneToOne(type => rests, rests => rests.id)
    rests: rests;

    @ManyToMany(type => menus, menus => menus.id, {
        cascade: true
    })
    menus: menus[];
}