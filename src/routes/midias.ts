
import express, { NextFunction, Request, Response } from 'express';
import midiasController from '@Controllers/midiasController';



const router = express.Router();

const setType = (type: string) => 
    ( req: Request, res: Response, next: NextFunction ) => {
        res.locals = {
            ...res.locals,
            type
        }

        return next();
    }

router.get( '/series/', setType('series'), midiasController.findAll );
router.get( '/animes/', setType('animes'), midiasController.findAll );



export default router;
