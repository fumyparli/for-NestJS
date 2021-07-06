import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {PhotometadataEntity} from "../photometadata/photometadata.entity";

@Entity()
export class PhotoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column("text")
    description: string;

    @Column()
    filename: string;

    @Column("double")
    views: number;

    @Column()
    isPublished: boolean;

    @OneToOne(type => PhotometadataEntity, photoMetadataEntity => photoMetadataEntity.photo)
    metadata: PhotometadataEntity;
}