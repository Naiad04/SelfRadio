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
import { Category } from "./Category";

@Entity()
@Unique(["name"])
export class Track {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1, 120)
    name: string;

    @Column()
    timesPlayed: number;

    @Column()
    length: number;

    @ManyToOne(type => Category, category => category.tracks)
    category: Category;

    @Column({ default: false })
    processed: boolean;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}