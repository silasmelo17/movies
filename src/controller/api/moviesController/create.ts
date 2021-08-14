
import { Request, Response } from 'express';

import models from '@Models/index';


async function create( req: Request, res: Response ) {
    const { name, description, duration, year, slug, thumb, src, categories } = req.body;

    console.log(typeof categories)

    try {
        const movie = await models.Movie.create({
            name, 
            description,
            duration, 
            year, 
            slug,
            thumb, 
            src
        });

        const relationships = categories
            .map( (id:any) => Number(id))
            .map( (id:number) => ({
                MovieId: movie.getDataValue('id'),
                CategoryId: id
            }));

        await Promise.all( relationships.map( (relationship:any) =>  
            models.Movies_Categories.create(relationship)
        ));

        return res.status(201).json(movie);
    } catch(err) {
        return res.status(503).json(err);
    }
}



export default create;
