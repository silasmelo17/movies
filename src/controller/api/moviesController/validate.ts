
import models from '@Models/index';



export const validatePagination = (limit: number, page: number) => {
    const limitPossibilities = [ 12, 24, 32 ];

    const correctLimit = limitPossibilities.find( possibility => possibility === limit ) || 12;

    return { 
        limit: correctLimit, 
        offset: correctLimit * (page-1)
    };
}

export const validateAttributes = (fields: string) => {
    const attributes = [ 'name', 'thumb', 'slug', 'src', 'description', 'duration', 'year' ];

    const arr = fields
        .split(',')
        .filter(field => attributes.some( attr => attr === field ))

    return fields 
        ? arr.length > 0 ? arr: attributes
        : undefined
}

export const validateInclude = (fields: string) => {
    const include = { 
        model: models.Category,
        through: { attributes: [] }
    }

    if( fields === 'undefined' )
        return include;
    else if( fields.includes('categories'))
        return include;
    else
        return undefined;
}
