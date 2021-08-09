
async function renderView(req, res) {
    try {
        const { view, ...body } = res.body;
   
        return res.render( view, body );
    } catch(err) {
        res.status(503).json(err);
    }
}



module.exports = renderView;
