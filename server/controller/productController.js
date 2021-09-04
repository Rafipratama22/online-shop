const {Product} = require('../models')

class ProductController{
    static async listProduct(req, res, next){
        try {
            const all = await Product.findAll()
            console.log(all)
            res.status(200).json(all)
        } catch (err) {
            console.log(err)            
        }
    }
    static async detailProduct(req, res, next){
        try {
            const {id} = req.params
            const detail = await Product.findOne({where: {id}})
            console.log(detail)
            res.status(200).json(detail)
        } catch (err) {
            console.log(err)
        }
    }
    static async postProduct(req, res, next){
        try {
            const {name, price, image, stock} = req.body
            const product = await Product.create({name, price, image, stock})
            console.log(product)
            res.status(200).json(product)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = ProductController