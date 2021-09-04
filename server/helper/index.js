const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = 'SECRET'

const hashPassword = (input) => {
    return bcrypt.hashSync(input, 8)
}

const verifyPassword = (input, hash) => {
    return bcrypt.compareSync(input, hash)
}

const generateToken = (input) => {
   return jwt.sign(input, secret) 
}

const verifyToken = (input) => {
    return jwt.verify(input, secret)
}

module.exports = {
    hashPassword, verifyPassword, verifyToken, generateToken
}