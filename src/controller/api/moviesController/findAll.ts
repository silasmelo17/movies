
import { Request, Response } from 'express';

import models from '@Models/index';

import { validatePagination, validateAttributes, validateInclude } from './validate';



async function findAll( req: Request, res: Response ) {
    const { fields } = req.query;
    const limit = Number(req.query.limit) || 12;
    const page = Number(req.query.page) || 1;

    try {
        const count = await models.Movie.count();

        const maxPages = Math.ceil(count/limit);
        const currentPage = page > maxPages ? maxPages: page;

        const pagination = validatePagination(limit, currentPage ); 
        const attributes = validateAttributes(String(fields));
        const include = validateInclude(String(fields));
        
        const data = await models.Movie.findAll({ attributes, include, ...pagination });
        
        return res.status(200).json({ 
            data, count, limit, page: currentPage
        });
    } catch( err ) {
        return res.status(503).json({
            error: "Não foi possível retornar os filmes",
            ...err
        });
    }
}

export default findAll;
