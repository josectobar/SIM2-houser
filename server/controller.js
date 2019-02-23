
module.exports = {
    getProperties: (req, res) => {
        const db = req.app.get('db')
        db.get_properties().then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(`There was a problem with the get properties req: ${err}`))
    },
    addProperty: (req, res) => {
        const db = req.app.get('db')
        const { name, address, city, uState, zip_code, mortgage_amount, desire_rent, img_url } = req.body
        console.log(req.body);
        db.add_property(name, address, city, uState, zip_code, mortgage_amount, desire_rent, img_url).then(response => {
            res.status(200).send(response)
        }).catch(err => {console.log(err), res.status(500).send(`There was a problem with the add request: ${err}`)})
    },
    deleteProperty: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.delete_property(id).then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(`There was a problem with the delete req: ${err}`))
    }
}