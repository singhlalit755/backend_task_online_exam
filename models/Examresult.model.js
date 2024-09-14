var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let examResultsSchema = new Schema({
    
    userId:{
        type:String,
        ref:'User',
        required:true
    },
    answersData:[{
        questionId:{
            type:String,
            ref:'Question'
        },
        answer:{
            type:String
        },
        answerImage:{
            type:String   // optional
        }
    }]
    
},
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    });



var ExamResults = mongoose.model('Examresult', examResultsSchema);

module.exports = ExamResults;