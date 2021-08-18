
import { Request, Response, NextFunction } from 'express';



const validateFields = (fields:string | string[] | undefined ): string[] =>
    fields 
        ? typeof fields === 'string'
            ? String(fields).split(',')
            : fields
        : []

const validatePagination = (limit: number, page: number) => {
    const limitPossibilities = [ 12, 24, 32 ];

    const correctLimit = limitPossibilities.find( possibility => possibility === limit ) || 12;

    return { 
        limit: correctLimit, 
        offset: correctLimit * (page-1)
    };
}

const validateAttributes = (fields: string[]): string[] => {
    const attributes = [ 'id', 'name', 'thumb', 'slug', 'src', 'description', 'duration', 'year' ];

    const arr = fields 
        ? fields.filter( field => attributes.some( attr => attr === field ))
        : []

    return arr.length > 0 
        ? arr
        : attributes
}

const includeCategories = (fields: string | string[] | undefined ) =>
    fields 
        ? typeof fields === 'string'
            ? String(fields)
                .split(',')
                .some( field => field === 'categories' )
            : fields.some( field => field === 'categories' )
        : true



async function validateQuery( req: Request, res: Response, next: NextFunction ) {
    const limit = Number(req.query.limit) || 12;
    const page = Number(req.query.page) || 1;

    try {
        const fields = validateFields( req.query.fields as string | string[] | undefined );
        const attributes = validateAttributes(fields);
        const pagination = validatePagination(limit,page);
        const include = includeCategories( req.query.fields as string | string[] | undefined );

        res.locals = {
            ...res.locals,
            fields,
            attributes,
            page,
            include,
            ...pagination
        };
    
        return next();
    } catch(err) {
        return res.status(503).json(err);
    }
}



export default validateQuery;
