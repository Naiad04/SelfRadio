import { Request, Response, NextFunction } from "express";
import config from "../config";
import { isNullOrUndefined } from "util";

export const checkHookKey = (roles: Array<string>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        if (isNullOrUndefined(req.body.key) || (config.icesHookKey != req.body.key)) {
            res.status(401).send();
            return;
        }
        next();
    };
};