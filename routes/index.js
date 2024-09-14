var express = require('express') ;
const router = express.Router(); 
const userRoute = require('./userRoute');
const questionRoute = require('./questionRoute');

router.use('/user', userRoute);
router.use('/question', questionRoute);

module.exports = router;