
import { Request, Response, NextFunction} from 'express'
import axios from '@Config/axios.config';



async function findBySlug( req: Request, res: Response, next: NextFunction ) {
    const { slug } = req.params;

    const { data } = await axios.get(`/api/movies/${slug}`);

    res.locals = {
        view: 'player',
        title: data.name,
        ...data,
    };
    
    return next();
}



export default findBySlug;
