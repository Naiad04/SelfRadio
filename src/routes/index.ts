/* 
* This file aggregates routes from other files in this folder.
*/
import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import hook from "./hook";
import tracks from "./tracks";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);

export default routes;