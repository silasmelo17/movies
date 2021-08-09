
async function index(req, res) {
    const { name, season, episode } = req.params;

    return res.status(200).json({ name, season, episode });
}



module.exports = {
    index
}
