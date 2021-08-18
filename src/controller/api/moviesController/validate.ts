
import models from '@Models/index';



export const validateInclude = ( fields: string[], attributes: string[] ) => {
    const isToInclude = fields.some( key => key === 'categories') || fields === undefined;
    
    return isToInclude
        ? {
            model: models.Category,
            attributes: [ 'id', 'name' ],
            through: {
                attributes: []
            }
        }
        : undefined;
}
