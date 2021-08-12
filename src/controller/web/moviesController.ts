
import { Request, Response, NextFunction} from 'express'
import axios from '@Config/axios.config';



async function index( req: Request, res: Response, next: NextFunction ) {
    const { limit, page } = req.query;

    const { data } = await axios.get( '/api/movies', {
        params: {
            limit,
            page
        }
    });

    res.locals = {
        view: 'movies',
        title: "Filmes",
        data
    };

    return next();
}

async function get( req: Request, res: Response, next: NextFunction ) {
    const { slug } = req.params;

    const { data } = await axios.get(`/api/movies/${slug}`);

    res.locals = {
        view: 'player',
        title: data.name,
        ...data,
    };
    
    return next();
}

async function create( req: Request, res: Response, next: NextFunction ) {
    res.locals = { 
        view: 'register_movie',
        title: "Register"
    };

    return next();
}



export default {
    index,
    get,
    create
}
