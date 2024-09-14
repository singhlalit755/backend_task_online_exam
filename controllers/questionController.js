const Model = require('../models/index');
var responseHelper = require("../services/response.helper");
const Constant = require('../services/Constant');

module.exports = { 

    async question(req, res) {
        try {
            const question =  new Model.Question(req.body)
            const questionSaved =  await question.save()
            const message = 'Question added successfully'
            return responseHelper.success(res, questionSaved, message)
        } catch (err) {
            console.log(err);
            return responseHelper.requestfailure(Constant.error.serverError);
        }
    },

    async exam(req,res) {
        try {
            const count = await Model.Question.countDocuments()
            var random = Math.floor(Math.random() * count)
            const questionsData =  await Model.Question.findOne().skip(random)
            const message = 'Questions retreived successfully'
            return responseHelper.success(res, questionsData, message)
        } catch (err) {
            console.log(err);
            return responseHelper.requestfailure(Constant.error.serverError);
        }
    },


    async submitExam(req,res) {
        try {
            if(req.file) req.body.answerImage = req.file.fileName
            const answers = new Model.ExamResults(req.body)
            const answerData = await answers.save()
            const message = 'Result submitted successfully'
            return responseHelper.success(res, answerData, message)
        } catch (err) {
            console.log(err);
            return responseHelper.requestfailure(Constant.error.serverError);
        }
    }
}