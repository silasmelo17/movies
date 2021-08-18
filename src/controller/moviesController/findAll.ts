
import { Request, Response, NextFunction} from 'express'
import axios from '@Config/axios.config';



async function findAll( req: Request, res: Response, next: NextFunction ) {
    const { limit, page } = req.query;

    try {
        const { data } = await axios.get( '/api/movies', {
            params: {
                fields: [ 'name', 'thumb', 'slug' ],
                limit,
                page
            }
        });
        
        res.locals = {
            view: 'movies',
            title: "Filmes",
            ...data
        };
        
        return next();
    } catch( err) {
        return res.status(503).json(err);
    }
}



export default findAll;
