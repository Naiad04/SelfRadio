import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Track } from "../entity/Track"
import { Category } from "../entity/Category";
import { validate } from "class-validator";
import { join } from "path";
import config from "../config"
import { renameSync } from "fs";


class TrackController {
    static newtrack = async (req: Request, res: Response) => {
        // Check if this track has an assigned category
        let category: Category;
        if (req.body.categoryId != null) {
            const categoryRepository = getRepository(Category);
            try {
                category = await categoryRepository.findOneOrFail(req.body.categoryId);
            } catch (e) {
                res.status(404).send("Category id not found");
                return;
            }
        }

        //Create a new track and save it to the repository.
        let track = new Track();
        track.name = req.body.name;
        track.category = category;
        const trackRepository = getRepository(Track);
        trackRepository.save(track);
        res.status(201).send("New Track created");

        //At this point we still need to process the uploaded file.
        // Should be done after the request is completed beecause of the time this process can take.
        renameSync(req.file.path, join("../", config.trackStorage, track.id.toString() + ".mp3"));
        // TODO: I assumed this file is a .mp3 file but we should check this or maybe other stuff.
    };
}
export default TrackController;