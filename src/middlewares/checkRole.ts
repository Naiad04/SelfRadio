/*
* Even if a user is validly logged in, he may try to access a route that he may not have role authorization to access.
* This middleware will check if the logged user really have the role required to access this route.
* If not, respond with 401 (unauthorized) status code. Note that we made roles as an Array of strings.
* That is because you may need, in the future, multiple roles to access the same route.
*/
import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import { User } from "../entity/User";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the user ID from previous midleware
    const id = res.locals.jwtPayload.userId;

    //Get user role from the database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send();
    }

    //Check if array of authorized roles includes the user's role
    if (roles.indexOf(user.role) > -1) next();
    else res.status(401).send();
  };
};