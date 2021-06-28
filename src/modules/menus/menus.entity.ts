import {Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {users} from "../users/users.entity";

@Entity()
export class menus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rest_id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @ManyToMany(type => users, users => users.id, {
        cascade: true
    })
    @JoinTable({name: 'users_orders_menus'})
    @JoinColumn()
    users: users[];
}