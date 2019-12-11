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

    @Column({ default: 0 })
    timesPlayed: number;

    @Column({ default: 0 })
    length: number;

    @ManyToOne(type => Category, category => category.tracks)
    category: Category;

    @Column({ default: false })
    processed: boolean;

    @Column({ default: false })
    hidden: boolean;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}