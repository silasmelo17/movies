
import { Request, Response, NextFunction } from "express";
import axios from '@Config/axios.config';



async function index ( req: Request, res: Response, next: NextFunction ) {
    const { id } = req.params;
    const { limit, page } = req.query;

    const { data } = await axios.get( `/api/category/${id}`, {
        params: { 
            limit, 
            page,
            fields: [ 'name', 'slug', 'thumb' ],
        }
    });

    res.locals = {
        view: 'categories',
        title: 'Find by categories.',
        baseUrl: req.originalUrl.split('?')[0],
        ...data
    };

    return next();
}



export default {
    index
}
