
import { Request, Response } from 'express';

import models from '@Models/index';



async function findOne(req: Request, res: Response ) {
    const { slug } = req.params;

    try{
        const data = await models.Movie.findOne({ 
            where: { slug },
            include: { 
                model: models.Category,
                through: { attributes: [] }
            }
        });

        return res.status(200).json(data);
    } catch( err ) {
        return res.status(503).json({
            error: "Não foi possível retornar os filmes",
            ...err
        });
    }
}

export default findOne;
