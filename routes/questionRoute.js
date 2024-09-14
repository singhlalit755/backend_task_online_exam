
var express = require('express');
const router = express.Router()
var Controller = require('../controllers/index.js');
var multer = require('multer') ;
var imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/memorybox')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '' + path.extname(file.originalname))
    }
  });
var Upload = multer({ storage: imageStorage });

// Create new Question from Examiner
router.post('/question',Controller.QuestionController.question);

// Get Random questions for Candidate
router.get('/exam', Controller.QuestionController.exam);

// Submit Exam with Image as optional
router.post('submitExam', Upload.single('answerImage'),Controller.QuestionController.submitExam)

module.exports = router;