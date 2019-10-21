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
import { Song } from "./Song";

@Entity()
@Unique(["name"])
export class Albume {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1, 120)
    name: string;

    @Column()
    timesPlayed: number;

    @OneToMany(type => Song, song => song.albume);
    songs: Song[];

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    addSong() {

    }

    addSongById(songId: number) {

    }
}