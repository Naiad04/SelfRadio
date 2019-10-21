import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";
import { Length } from "class-validator";
import { Albume } from "./Albume";

@Entity()
@Unique(["name"])
export class Song {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1, 120)
    name: string;

    @Column()
    timesPlayed: number;

    @Column()
    length: number;

    @ManyToOne(type => Albume, albume => albume.songs)
    albume: Albume;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}