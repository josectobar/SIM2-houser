
module.exports = {
    getProperties: (req, res) => {
        const db = req.app.get('db')
        db.get_properties().then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(`There was a problem with the get properties req: ${err}`))
    }
}