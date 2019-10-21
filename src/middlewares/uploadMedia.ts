/*
* This middleware will be called on every upload of Media to Server
* This middleware in fact only handles the file uploading process.
* Registerations of files to database should be made in the controller. 
* After this middleware is called req.file will be existent.
*/
import { Request, Response, NextFunction } from "express";
import multer from "multer";

export const uploadMedia = (req: Request, res: Response, next: NextFunction) => {
    const upload = multer({ storage: multer.diskStorage({}) });
    upload.single('media')(req, res, function (err) {
        if (err) throw err;
    });

    //Call the next middleware or controller
    next();
};