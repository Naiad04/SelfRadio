import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from "typeorm";
import { Length } from "class-validator";
import { Track } from "./Track";

@Entity()
@Unique(["name"])
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1, 120)
    name: string;

    @Column()
    timesPlayed: number;

    @OneToMany(type => Track, track => track.category)
    tracks: Track[];

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    addTrack(track: Track) {

    }
}