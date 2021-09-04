const { Admin } = require("../models");
const { hashPassword, verifyPassword, generateToken } = require("../helper");

class AdminController {
  static async adminRegister(req, res, next) {
    try {
      let { username, password } = req.body;
      password = hashPassword(password);
      const register = await User.create({ username, password });
      res.status(201).json(register);
    } catch (err) {
      console.log(err);
    }
  }
  static async adminLogin(req, res, next) {
    try {
      let { username, password } = req.body;
      const find = await User.findOne({ where: { username } });
      if (find) {
        const bool = verifyPassword(password, find.password);
        if (bool) {
          const access_token = generateToken({ username });
          res.status(200).json({ access_token });
        } else {
          throw { code: 403, message: "invalid JWT" };
        }
      } else {
        throw { code: 400, message: "username or password is wrong" };
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = AdminController;
