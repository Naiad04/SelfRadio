import { Request, Response } from "express";
import { getRepository } from "typeorm";

class HookController {
    static reportInit = async (req: Request, res: Response) => {
        //TODO
    };
    static reportShutdown = async (req: Request, res: Response) => {
        //TODO
    };
    static nextTrack = async (req: Request, res: Response) => {
        //TODO
    };
}
export default HookController;