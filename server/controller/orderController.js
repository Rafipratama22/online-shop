const {Order, Product, User} = require('../models')

class OrderController{
    static async listOrder(req, res, next){
        try {
            const data = await Order.findAll({
                include: [
                    {model: Product},
                    {model: User}
                ]
            })
            console.log(data)
            res.status(200).json({data})
        } catch (err) {
            console.log(err)
        }
    }
    static async postOrder(req, res, next){
        try {
            const {}
        } catch (err) {
            
        }
    }
}

module.exports = OrderController