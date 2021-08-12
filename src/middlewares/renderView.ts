
import { Request, Response} from 'express'



async function renderView( req: Request, res: Response ) {
    try {
        const { view, ...body } = res.locals;
   
        return res.render( view, body );
    } catch(err) {
        res.status(503).json(err);
    }
}



export default renderView;
