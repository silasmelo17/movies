
import { Request, Response } from 'express';

import models from '@Models/index';

import { validateInclude } from './validate';



async function findAll( req: Request, res: Response ) {
    const { fields, attributes, page, limit, offset  } = res.locals;

    try {
        const count = await models.Movie.count();

        const maxPages = Math.ceil(count/limit);
        const currentPage = page > maxPages ? maxPages: page;

        const include = validateInclude(fields as [], attributes );

        const data = await models.Movie.findAll({ 
            attributes,
            include,
            limit,
            offset
        });
        
        return res.status(200).json({ 
            data, 
            count, 
            limit, 
            page: currentPage,
        });
    } catch(err) {
        return res.status(503).json({
            error: "Não foi possível retornar os filmes",
            ...err
        });
    }
}

export default findAll;
