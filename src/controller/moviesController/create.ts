
import { Request, Response, NextFunction} from 'express';



async function create( req: Request, res: Response, next: NextFunction ) {
    res.locals = { 
        view: 'register_movie',
        title: "Register"
    };

    return next();
}



export default create;
