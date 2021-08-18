
import { Request, Response } from 'express';

import models from '@Models/index';



async function findByCategory( req: Request, res: Response ) {
    const { id } = req.params;
    const { attributes, page, limit, offset, include } = res.locals;

    try {
        const count = await models.Movies_Categories.count({
            where: {
                CategoryId: id
            }
        });

        const category = await models.Category.findOne({
            where: {
                id: id
            }
        })

        const data = await models.Movie.findAll({
            attributes,
            limit,
            offset,
            include: {
                model: models.Category,
                attributes: include ? [ 'id', 'name']: [],
                required: true,
                through: {
                    attributes: [],
                    where: {
                        CategoryId: id
                    }
                },
            }
        });

        return res.status(200).json({
            page,
            limit,
            data,
            count,
            category,
        });
    } catch(err) {
        return res.status(503).json(err);
    }
}



export default findByCategory;
