
import { Request, Response, NextFunction} from 'express'
import axios from '@Config/axios.config';



const addHref = (data: []) => 
    data.map( (movie:any) => { 
        movie.href = `/movies/${movie.slug}`
        return movie;
    })

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
            ...data,
            view: 'listing',
            title: "Filmes",
            data: addHref(data.data)
        };
        
        return next();
    } catch( err) {
        return res.status(503).json(err);
    }
}



export default findAll;
