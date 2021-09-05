
import { Request, Response, NextFunction } from 'express';
import axios from '@Config/axios.config';



async function findAll( req: Request, res: Response, next: NextFunction ) {
    const { type } = res.locals;

    try {
        const { page, limit } = req.query;

        const { data } = await axios( `/api/${type}`, {
            params: {
                fields: [ 'name', 'thumb', 'slug' ],
                page,
                limit
            }
        });

        res.locals = {
            ...data,
            view: 'listing',
            title: "Séries",
            data: data.data.map( (midia: any) => {
                midia.href = `/${type}/${midia.slug}`
                return midia
            })
        };

        return next();
    } catch(err) {
        return res.status(503).json(err);
    }
}



export default findAll;
