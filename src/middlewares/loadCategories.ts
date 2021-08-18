
import { Request, Response, NextFunction } from 'express';

import axios from '@Config/axios.config';



async function loadCategories(req: Request, res: Response, next: NextFunction ) {
    const { locals } = res;
    
    const { data:categories } = await axios.get('/api/categories');

    res.locals = {
        ...locals,
        categories
    };

    return next();
}



export default loadCategories;
