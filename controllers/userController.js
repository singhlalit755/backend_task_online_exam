const Model = require('../models/index');
const Constant = require('../services/Constant');
var responseHelper = require("../services/response.helper");

module.exports = { 

    async addUser(req, res) {
        try {
            const user =  new Model.User(req.body)
            const usersaved =  await user.save()
            const message = 'Successfully Registered'
            return responseHelper.success(res, usersaved, message)
        } catch (err) {
            console.log(err);
            responseHelper.requestfailure(res,Constant.error.serverError)
        }
    },
}