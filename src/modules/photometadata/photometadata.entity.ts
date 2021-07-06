import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {PhotoEntity} from "../photo/photo.entity";

@Entity()
export class PhotometadataEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    height: number;

    @Column()
    width: number;

    @Column()
    orientation: string;

    @Column()
    compressed: boolean;

    @Column()
    comment: string;

    @OneToOne(type => PhotoEntity, photo => photo.metadata)
    @JoinColumn()
    photo: PhotoEntity;

}