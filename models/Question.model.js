var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let questionSchema = new Schema({
    
    question:{
        type:String,
        required:true
    },
    questionType:{                 // Enums where frontend dev can check if Textbox or options should be seen
        type:String,
        enum:['CHECKBOX','TEXTBOX','TEXTBOXWITHIMAGE']   
    },
    questionOptions:[{             // If question is options based question can be added as array   
        optionsChoice:{
            type:String
        },
        isAnswer:{                 // Use only if needed to show answer true or false at frontend as soon as he clicks
            type:Boolean,
            default:false  
        }
    }]
},
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    });



var Questions = mongoose.model('Question', questionSchema);

module.exports = Questions;