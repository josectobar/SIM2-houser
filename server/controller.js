
module.exports = {
    getProperties: (req, res) => {
        const db = req.app.get('db')
        db.get_properties().then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(`There was a problem with the get properties req: ${err}`))
    },
    addProperty: (req, res) => {
        const db = req.app.get('db')
        const { name, address, city, state, zip_code } = req.body
        db.add_property(name, address, city, state, parseInt(zip_code)).then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(`There was a problem with the add request: ${err}`))
    },
    deleteProperty: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.delete_property(id).then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(`There was a problem with the delete req: ${err}`))
    }
}